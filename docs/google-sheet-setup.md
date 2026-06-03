# Club POS — Google Sheet setup (7/month cap + colors)

One-time setup (~10 minutes). After this, every redemption form submit gets:

- **ACCEPTED** (green row) — under 7 this month and 4+ hours since last accept  
- **DENIED - LIMIT REACHED** (red) — already 7 accepted this month  
- **DENIED - WAIT 4 HOURS** (red) — same member redeemed too recently  
- Columns: **Status**, **Redemptions this month**, **Remaining** (values only — no formulas)

**Your sheet:**  
https://docs.google.com/spreadsheets/d/1AZCxQ13A579JT87DszcTVe8htIFcRwT5UyI40LJeMn4/edit#gid=398899636

**Redemption form:**  
https://docs.google.com/forms/d/e/1FAIpQLSdjY_3bvQsSJI1SLo0WqFgWLfVMnuNq3L2S6n6CSdGzQL-GUw/viewform

---

## Fix broken sheet (do this if Status shows phone numbers)

Your sheet had these problems (now fixed by `repairAllRows`):

| Problem | What you had |
|---------|----------------|
| Column D (Status) | Phone numbers copied instead of ACCEPTED / DENIED |
| Column E | Empty — no monthly count |
| Column F | Broken formula `=IF(E2<240,...)` stuck on row 2 |
| Row 14 | Junk formula row |
| Member 3101 | 9+ rows with no limit enforced |

**Fix:** paste the latest script, then run **`repairAllRows()`** once.

---

## Step 1 — Open Apps Script

1. Open your **Slice club redemption responses** sheet (link above).  
2. **Extensions → Apps Script**.  
3. Delete any placeholder code in `Code.gs`.  
4. Copy **all** of `scripts/google-redemption-limit.gs` from this repo and paste it.  
5. **Save** (disk icon). Name the project `Club POS Redemption`.

---

## Step 2 — Run setup + repair (once)

1. Select **`setupClubPosSheet`** → **Run** → Allow permissions.  
2. Select **`repairAllRows`** → **Run** (fixes all existing rows + removes junk formulas).  
3. Check the sheet — green **ACCEPTED**, red **DENIED**, counts in column E, no formulas in F.

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
   - **Red / DENIED** → do not redeem (7/month cap or 4-hour wait)  
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
| Status shows phone numbers in column D | Run **`repairAllRows()`** with the latest script |
| Script permission errors | Extensions → Apps Script → Run any function → re-authorize |

---

## What this does *not* do (yet)

- Does not block the Google Form HTML before submit (row is added, then marked DENIED). Staff must check **Status** before giving the item.  
- Does not sync Stripe subscribers automatically (add members to a roster tab manually or via Zapier later).

That is enough for a single shop operating today.
