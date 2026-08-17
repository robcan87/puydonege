# Puydonege Booking Calendar

Family holiday home booking calendar. Static PWA, no build step, no framework.

## Stack
- `index.html` — entire app: vanilla JS module, embedded CSS. Supabase JS loaded from CDN.
- `config.js` — all configuration (Supabase keys, notify email, owners list). Never hardcode these elsewhere.
- Supabase — `bookings` table (see `supabase.sql`), open RLS policies, realtime enabled.
- Hosted on GitHub Pages from main branch root. Push to main = deploy.

## Behaviour rules (owner's requirements — keep these)
- All non-owner bookings start as `pending`; anyone can Approve/Decline (trusted family).
- After a non-owner booking, the confirmation shows "Email the approvers" (pre-filled mailto to NOTIFY_EMAIL) and a WhatsApp share — manual send by design, no email service.
- Owners (names in `config.js`) get instant `approved` status and no notify prompt.
- Date overlaps are allowed, flagged in amber, never blocked.
- "Who's staying" is a display label separate from the saved identity name; owner check uses the saved name only.
- One-button .ics download on approved stays; stable UID so re-import updates rather than duplicates.

## Conventions
- UK English throughout (UI copy and code comments).
- No build tooling, no npm — keep it deployable as plain files.
- Mobile-first; test at phone width.
