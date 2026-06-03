/**
 * Club POS — redemption limit (7 per calendar month)
 *
 * Paste into: Google Sheet → Extensions → Apps Script
 * Sheet: https://docs.google.com/spreadsheets/d/1AZCxQ13A579JT87DszcTVe8htIFcRwT5UyI40LJeMn4/
 *
 * Run setupClubPosSheet() once, then run installFormTrigger() once.
 */

const MONTHLY_LIMIT = 7;

// Form response columns (default Google Forms layout)
const COL_TIMESTAMP = 1;
const COL_PHONE = 2;
const COL_CASHIER = 3;
const COL_STATUS = 4;
const COL_COUNT = 5;
const COL_REMAINING = 6;

const COLOR_ACCEPTED = "#d9ead3";
const COLOR_DENIED = "#f4cccc";

function setupClubPosSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = sheet.getRange(1, 1, 1, COL_REMAINING).getValues()[0];

  if (!headers[COL_STATUS - 1]) {
    sheet.getRange(1, COL_STATUS).setValue("Status");
  }
  if (!headers[COL_COUNT - 1]) {
    sheet.getRange(1, COL_COUNT).setValue("Redemptions this month");
  }
  if (!headers[COL_REMAINING - 1]) {
    sheet.getRange(1, COL_REMAINING).setValue("Remaining");
  }

  sheet.getRange(1, 1, 1, COL_REMAINING).setFontWeight("bold");
  sheet.setFrozenRows(1);
}

function installFormTrigger() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {
    if (trigger.getHandlerFunction() === "onFormSubmit") {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(ss)
    .onFormSubmit()
    .create();
}

function onFormSubmit(e) {
  const sheet = e.range.getSheet();
  const row = e.range.getRow();

  setupClubPosSheet();

  const phone = normalizePhone(e.values[COL_PHONE - 1]);
  if (!phone) {
    markRow(sheet, row, "DENIED - INVALID PHONE", 0, 0, COLOR_DENIED);
    return;
  }

  const acceptedBefore = countAcceptedThisMonth(sheet, phone, row);

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

function countAcceptedThisMonth(sheet, phone, skipRow) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return 0;
  }

  const width = Math.max(COL_REMAINING, sheet.getLastColumn());
  const data = sheet.getRange(2, 1, lastRow - 1, width).getValues();
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    const rowNumber = i + 2;
    if (rowNumber === skipRow) {
      continue;
    }

    const timestamp = data[i][COL_TIMESTAMP - 1];
    const rowPhone = normalizePhone(data[i][COL_PHONE - 1]);
    const status = String(data[i][COL_STATUS - 1] || "").trim();

    if (rowPhone !== phone) {
      continue;
    }
    if (!isSameMonth(timestamp, month, year)) {
      continue;
    }
    if (status === "DENIED - LIMIT REACHED" || status === "DENIED - INVALID PHONE") {
      continue;
    }

    count += 1;
  }

  return count;
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
