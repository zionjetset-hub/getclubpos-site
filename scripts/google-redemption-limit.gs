/**
 * Club POS — redemption limits
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1AZCxQ13A579JT87DszcTVe8htIFcRwT5UyI40LJeMn4/
 *
 * RUN ONCE (in order):
 *   1. setupClubPosSheet()
 *   2. repairAllRows()        ← fixes your broken Status / formula columns
 *   3. installFormTrigger()
 */

const MONTHLY_LIMIT = 7;
const COOLDOWN_MINUTES = 240; // 4 hours between accepted redemptions

const COL_TIMESTAMP = 1; // A
const COL_PHONE = 2; // B
const COL_CASHIER = 3; // C
const COL_STATUS = 4; // D
const COL_COUNT = 5; // E
const COL_REMAINING = 6; // F

const COLOR_ACCEPTED = "#d9ead3";
const COLOR_DENIED = "#f4cccc";
const COLOR_NEUTRAL = "#ffffff";

function getResponsesSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName("Form Responses 1") || ss.getActiveSheet();
}

function setupClubPosSheet() {
  const sheet = getResponsesSheet();
  sheet.getRange(1, COL_STATUS).setValue("Status");
  sheet.getRange(1, COL_COUNT).setValue("Redemptions this month");
  sheet.getRange(1, COL_REMAINING).setValue("Remaining");
  sheet.getRange(1, 1, 1, COL_REMAINING).setFontWeight("bold");
  sheet.setFrozenRows(1);
}

function installFormTrigger() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ScriptApp.getProjectTriggers().forEach(function (trigger) {
    if (trigger.getHandlerFunction() === "onFormSubmit") {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(ss)
    .onFormSubmit()
    .create();
}

/**
 * Fixes existing rows: removes broken formulas, recalculates Status / counts / colors.
 */
function repairAllRows() {
  const sheet = getResponsesSheet();
  setupClubPosSheet();
  removeInvalidRows(sheet);

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return;
  }

  sheet
    .getRange(2, COL_STATUS, lastRow - 1, COL_REMAINING - COL_STATUS + 1)
    .clearContent();
  sheet.getRange(2, 1, lastRow - 1, COL_REMAINING).setBackground(COLOR_NEUTRAL);

  for (let row = 2; row <= sheet.getLastRow(); row++) {
    evaluateRow(sheet, row);
  }
}

function onFormSubmit(e) {
  const sheet = e.range.getSheet();
  const row = e.range.getRow();
  setupClubPosSheet();
  evaluateRow(sheet, row);
}

function evaluateRow(sheet, row) {
  const phone = normalizePhone(sheet.getRange(row, COL_PHONE).getValue());
  const timestamp = sheet.getRange(row, COL_TIMESTAMP).getValue();

  if (!phone) {
    markRow(sheet, row, "DENIED - INVALID PHONE", 0, 0, COLOR_DENIED);
    return;
  }

  if (!(timestamp instanceof Date) || isNaN(timestamp.getTime())) {
    markRow(sheet, row, "DENIED - INVALID TIME", 0, 0, COLOR_DENIED);
    return;
  }

  const acceptedBefore = countAcceptedBeforeRow(sheet, phone, row);
  const lastAccepted = getLastAcceptedTime(sheet, phone, row);

  if (acceptedBefore >= MONTHLY_LIMIT) {
    markRow(
      sheet,
      row,
      "DENIED - LIMIT REACHED",
      acceptedBefore,
      0,
      COLOR_DENIED
    );
    return;
  }

  if (
    lastAccepted &&
    minutesBetween(lastAccepted, timestamp) < COOLDOWN_MINUTES
  ) {
    markRow(
      sheet,
      row,
      "DENIED - WAIT 4 HOURS",
      acceptedBefore,
      MONTHLY_LIMIT - acceptedBefore,
      COLOR_DENIED
    );
    return;
  }

  const countAfter = acceptedBefore + 1;
  markRow(
    sheet,
    row,
    "ACCEPTED",
    countAfter,
    MONTHLY_LIMIT - countAfter,
    COLOR_ACCEPTED
  );
}

function countAcceptedBeforeRow(sheet, phone, beforeRow) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return 0;
  }

  const month = sheet.getRange(beforeRow, COL_TIMESTAMP).getValue().getMonth();
  const year = sheet.getRange(beforeRow, COL_TIMESTAMP).getValue().getFullYear();
  let count = 0;

  for (let row = 2; row < beforeRow; row++) {
    if (!isAcceptedRedemption(sheet, row, phone, month, year)) {
      continue;
    }
    count += 1;
  }

  return count;
}

function getLastAcceptedTime(sheet, phone, beforeRow) {
  let last = null;

  for (let row = 2; row < beforeRow; row++) {
    const timestamp = sheet.getRange(row, COL_TIMESTAMP).getValue();
    const rowPhone = normalizePhone(sheet.getRange(row, COL_PHONE).getValue());
    const status = String(sheet.getRange(row, COL_STATUS).getValue() || "").trim();

    if (rowPhone !== phone) {
      continue;
    }
    if (status !== "ACCEPTED") {
      continue;
    }
    if (!(timestamp instanceof Date) || isNaN(timestamp.getTime())) {
      continue;
    }
    if (!last || timestamp > last) {
      last = timestamp;
    }
  }

  return last;
}

function isAcceptedRedemption(sheet, row, phone, month, year) {
  const timestamp = sheet.getRange(row, COL_TIMESTAMP).getValue();
  const rowPhone = normalizePhone(sheet.getRange(row, COL_PHONE).getValue());
  const status = String(sheet.getRange(row, COL_STATUS).getValue() || "").trim();

  if (rowPhone !== phone) {
    return false;
  }
  if (!isSameMonth(timestamp, month, year)) {
    return false;
  }

  return status === "ACCEPTED";
}

function removeInvalidRows(sheet) {
  for (let row = sheet.getLastRow(); row >= 2; row--) {
    const timestamp = sheet.getRange(row, COL_TIMESTAMP).getValue();
    const phone = normalizePhone(sheet.getRange(row, COL_PHONE).getValue());

    if (!phone && !timestamp) {
      sheet.deleteRow(row);
      continue;
    }

    if (typeof timestamp === "string" && timestamp.indexOf("=") === 0) {
      sheet.deleteRow(row);
    }
  }
}

function markRow(sheet, row, status, count, remaining, color) {
  sheet.getRange(row, COL_STATUS).setValue(status);
  sheet.getRange(row, COL_COUNT).setValue(count);
  sheet.getRange(row, COL_REMAINING).setValue(remaining);
  sheet.getRange(row, 1, 1, COL_REMAINING).setBackground(color);
}

function normalizePhone(value) {
  return String(value || "")
    .replace(/\D/g, "")
    .slice(-4);
}

function isSameMonth(timestamp, month, year) {
  if (!(timestamp instanceof Date) || isNaN(timestamp.getTime())) {
    return false;
  }
  return timestamp.getMonth() === month && timestamp.getFullYear() === year;
}

function minutesBetween(earlier, later) {
  return (later.getTime() - earlier.getTime()) / (1000 * 60);
}
