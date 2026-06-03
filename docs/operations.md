# Club POS — Operations guide

How the full platform works: public signup, payments, and in-store redemption.

**Staff bookmark (tablet at register):** https://www.getclubpos.com/staff

---

## System map

| Layer | Tool | URL |
|-------|------|-----|
| Customer signup | Website + Stripe | https://www.getclubpos.com |
| Payments | Stripe Payment Link | (configured on homepage CTA) |
| Redemption log | Google Form | [Slice club redemption](https://docs.google.com/forms/d/e/1FAIpQLSdjY_3bvQsSJI1SLo0WqFgWLfVMnuNq3L2S6n6CSdGzQL-GUw/viewform) |
| Fraud / audit | Google Form | [Slice club fraud check](https://docs.google.com/forms/d/e/1FAIpQLSfoQPWBqJ_wopbPiz_s_AOSr-tgRNSVBlvAM2xymGwRPb4bng/viewform) |
| Response data | Google Sheets | [Slice club redemption responses](https://docs.google.com/spreadsheets/d/1AZCxQ13A579JT87DszcTVe8htIFcRwT5UyI40LJeMn4/edit#gid=398899636) |
| 7/month cap + colors | Apps Script | See [google-sheet-setup.md](./google-sheet-setup.md) |
| Staff hub | This repo `/staff` | https://www.getclubpos.com/staff |

---

## Customer journey

1. Customer scans QR or visits **getclubpos.com**.
2. They read the offer: **$14.99/mo**, **7 redemptions per month**, members only, cancel anytime.
3. They tap **Join the Club** → Stripe checkout.
4. They redeem in-store; staff uses the redemption form (below).

---

## Staff: redeem a member

1. Open **https://www.getclubpos.com/staff** (or the redemption form directly).
2. Tap **Open redemption form**.
3. Enter:
   - **Last 4 digits of phone** (member lookup)
   - **Cashier name**
4. Submit — response is stored in the linked Google Sheet.

**Rules to enforce at the counter:**

- Members only (active Stripe subscription).
- **Maximum 7 redemptions per calendar month** per member.
- One redemption = one form submit.

### Counting redemptions in Sheets

1. Open the [redemption responses sheet](https://docs.google.com/spreadsheets/d/1AZCxQ13A579JT87DszcTVe8htIFcRwT5UyI40LJeMn4/edit#gid=398899636) (or Form → **Responses** → **View in Sheets**).
2. Filter or count rows for that member’s **last 4 phone digits** in the current month.
3. If count ≥ 7, politely decline until next month.

---

## Staff: fraud check

Use when:

- Someone cannot verify membership
- Too many visits in a short period
- Dispute at the register

**Form:** [Fraud check / check-in](https://docs.google.com/forms/d/e/1FAIpQLSfoQPWBqJ_wopbPiz_s_AOSr-tgRNSVBlvAM2xymGwRPb4bng/viewform)

Fields:

- **MEMBER LAST 4**
- **CASHIER NAME**

Responses also land in Google Sheets (separate tab or spreadsheet if linked).

---

## Member roster (recommended sheet columns)

Keep a simple roster tab (manual or copied from Stripe Customers until automation exists):

| Column | Example |
|--------|---------|
| Phone (last 4) | 4821 |
| Name | Jane D. |
| Email | from Stripe |
| Join date | 2026-06-01 |
| Active? | yes / canceled |
| Redemptions this month | 3 (or formula from responses) |
| Notes | |

---

## Stripe alignment

In Stripe Dashboard → your product / payment link, match the website:

- **$14.99/month**
- **7 redemptions per month**
- Members only
- Cancel anytime

Run a test checkout occasionally to confirm the live link works.

---

## Desktop shortcuts (legacy)

These match the forms above (saved on your Mac):

- `Slice club redemption OFFICAL.webloc` → redemption form
- `slice club check-in(zion (zionjetset)).crwebloc` → fraud/check-in form
- `slice club Fraud check.html` → saved preview of fraud form

Prefer **getclubpos.com/staff** so links stay in one place if form URLs change.

---

## What lives in this Git repo vs Google

| In `getclubpos-site` (Git / Vercel) | Outside repo (your Google account) |
|-------------------------------------|-------------------------------------|
| Marketing homepage | Redemption + fraud forms |
| `/staff` staff hub | All form responses / sheets |
| Pizza Flap game | Stripe billing |
| Marketing prompt docs | Member roster workflows |

---

## Enforce 7 redemptions + green/red rows

**One-time setup (required for auto accept/deny):** follow **[google-sheet-setup.md](./google-sheet-setup.md)** — paste `scripts/google-redemption-limit.gs` into your sheet’s Apps Script, run two functions, done.

After setup, each form row shows:

| Status | Row color | Meaning |
|--------|-----------|---------|
| ACCEPTED | Green | Redemption OK — count toward 7 |
| DENIED - LIMIT REACHED | Red | Already 7 this month — do not redeem |

---

## Phase 2 (optional later)

- Stripe → Sheet automation (new subscribers auto-added)
- `/staff` live lookup: type last 4 → show `3/7 used` without opening the full sheet
- Per-shop pages for pitching other businesses

Until then, **Forms + Sheets + /staff** is the intended operating model.
