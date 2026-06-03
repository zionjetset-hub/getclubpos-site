# Club POS — Google Sheet setup (7/month cap + colors)

One-time setup (~10 minutes). After this, every redemption form submit gets:

- **ACCEPTED** (green row) — under 7 this month  
- **DENIED - LIMIT REACHED** (red row) — already at 7  
- Columns: **Status**, **Redemptions this month**, **Remaining**

**Your sheet:**  
https://docs.google.com/spreadsheets/d/1AZCxQ13A579JT87DszcTVe8htIFcRwT5UyI40LJeMn4/edit#gid=398899636

**Redemption form:**  
https://docs.google.com/forms/d/e/1FAIpQLSdjY_3bvQsSJI1SLo0WqFgWLfVMnuNq3L2S6n6CSdGzQL-GUw/viewform

---

## Step 1 — Open Apps Script

1. Open your **Slice club redemption responses** sheet (link above).  
2. **Extensions → Apps Script**.  
3. Delete any placeholder code in `Code.gs`.  
4. Copy **all** of `scripts/google-redemption-limit.gs` from this repo and paste it.  
5. **Save** (disk icon). Name the project `Club POS Redemption`.

---

## Step 2 — Run setup (once)

1. In the script editor, select function **`setupClubPosSheet`** from the dropdown.  
2. Click **Run**.  
3. Google asks for permissions → **Review permissions → Allow** (your Google account).  
4. Switch back to the sheet — row 1 should now include **Status**, **Redemptions this month**, **Remaining**.

---

## Step 3 — Install the form trigger (once)

1. In Apps Script, select function **`installFormTrigger`**.  
2. Click **Run**.  
3. Submit a **test** redemption from the form (fake last-4 + cashier name).  
4. Refresh the sheet — the new row should be **green** with **ACCEPTED** and **Remaining: 6**.

---

## Step 4 — Test the limit

1. Submit the form **7 times** with the same last-4 (use test data).  
2. Submit an **8th** time with the same last-4.  
3. Row 8 should be **red** with **DENIED - LIMIT REACHED** and **Remaining: 0**.

Delete test rows when done.

---

## Staff workflow (after setup)

1. Customer gives **last 4 of phone**.  
2. Staff submits **redemption form** *before* or right as they hand over the item.  
3. Staff glances at the sheet (or waits for confirmation row):  
   - **Green / ACCEPTED** → OK  
   - **Red / DENIED** → do not redeem; explain 7/month limit  
4. Bookmark **https://www.getclubpos.com/staff** on the shop tablet.

---

## Optional — conditional formatting (backup)

If you want colors even without the script on old rows:

1. Select data rows (e.g. `A2:F500`).  
2. **Format → Conditional formatting**.  
3. Rule: **Custom formula** `=$D2="ACCEPTED"` → green fill.  
4. Add rule: `=$D2="DENIED - LIMIT REACHED"` → red fill.

The script already sets row background on each new submit.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| No Status column after run | Run `setupClubPosSheet` again on the correct tab |
| Submit doesn’t update sheet | Run `installFormTrigger` again; confirm form is linked to **this** sheet |
| Wrong column layout | Form must be: Timestamp, Last 4 phone, Cashier — or edit `COL_*` constants in the script |
| Script permission errors | Extensions → Apps Script → Run any function → re-authorize |

---

## What this does *not* do (yet)

- Does not block the Google Form HTML before submit (row is added, then marked DENIED). Staff must check **Status** before giving the item.  
- Does not sync Stripe subscribers automatically (add members to a roster tab manually or via Zapier later).

That is enough for a single shop operating today.
