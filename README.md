# Puydonege Booking Calendar

Family holiday home booking calendar. Static site (GitHub Pages) + Supabase (shared bookings database). When a booking is requested, the person taps "Email the approvers" and a pre-filled email opens ready to send.

No accounts or sign-in for family members. Owners' bookings (Rob, Shellee) are approved automatically with no email.

## Setup (about an hour, one-off)

### 1. Supabase (the database) — 10 minutes

1. Go to supabase.com, sign up (free), create a new project (any name, e.g. `puydonege`). Choose a region (London/eu-west-2).
2. Once the project is ready, open **SQL Editor**, paste the contents of `supabase.sql`, and Run.
3. Go to **Project Settings → API** and copy:
   - **Project URL** → paste into `SUPABASE_URL` in `config.js`
   - **anon public** key → paste into `SUPABASE_ANON_KEY` in `config.js`

### 2. GitHub Pages (hosting) — 10 minutes

1. Create a new GitHub repository (e.g. `puydonege`), public or private — Pages works with both on most plans; public is simplest.
2. Upload all the files in this folder (keep the `assets/` folder structure). Easiest: repo page → **Add file → Upload files** → drag the lot in → Commit.
3. **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main`, folder `/ (root)` → Save.
4. After a minute the site is live at `https://<your-username>.github.io/puydonege/`.

### 3. Check config.js

Open `config.js` and confirm:
- Both Supabase values are pasted in
- `NOTIFY_EMAIL` is `Robert.lawson@rattlerow.co.uk`
- `OWNERS` is `["Rob", "Shellee", "Rob & Shellee"]`

Commit the change. Note: the Supabase anon key is designed to be visible in a public site — that's normal. Access control is the obscurity of the link plus the database policies.

### 4. Test

1. Open the site, save your name, add a test booking with dates.
2. Tap "Email the approvers" on the confirmation and check the pre-filled email opens.
3. Approve it, tap "Add to my calendar", check the event imports.
4. Delete the test booking (Remove).

### 5. Roll out

Send the family the link with these instructions:

- **iPhone:** open in Safari → Share → Add to Home Screen
- **Android:** open in Chrome → three dots → Add to Home screen

The Puydonege watercolour is the app icon on the home screen.

## How it works day to day

- Anyone opens the app, saves their name once per device, and books with arrival/departure dates. "Who's staying" is an optional label (e.g. "Rob & Shellee").
- Non-owner bookings go in as **Awaiting approval**; the confirmation shows "Email the approvers" (pre-filled, one tap to send) and a WhatsApp option.
- Rob or Shellee (saved as those names) get instant approval and no email.
- Anyone can tap Approve/Decline (trusted-family model — in practice, the approvers).
- Overlapping dates are allowed and flagged in amber, never blocked.
- Approved stays have an **Add to my calendar** button (imports into iPhone/Outlook/Google; re-adding updates rather than duplicates in Outlook/Google).
- The calendar updates live across devices; pull Refresh if ever in doubt.

## Changing things later

- Owners or the notify address: edit `config.js`, commit — done.
- The data lives in Supabase → Table Editor → `bookings` if you ever need to fix an entry by hand.

## Housekeeping (automatic + occasional)

- A GitHub Action (`.github/workflows/keepalive.yml`) pings the database twice a week so the free Supabase project is never paused for inactivity. GitHub emails a warning if it disables the schedule after 60 days without commits — one click re-enables it.
- Occasionally: Supabase → Storage → `ics` bucket, delete old files (one small file accrues per "Add to my calendar" tap); and Table Editor → `bookings` → Export to CSV as a backup.
