// ── Puydonege Booking Calendar configuration ─────────────────────────
// Fill these in once, following the README. Nothing else needs editing.

window.PUYDONEGE_CONFIG = {
  // From Supabase → Project Settings → API
  SUPABASE_URL: "PASTE_SUPABASE_URL_HERE",
  SUPABASE_ANON_KEY: "PASTE_SUPABASE_ANON_KEY_HERE",

  // Who the "Email the approvers" button is addressed to
  NOTIFY_EMAIL: "Robert.lawson@rattlerow.co.uk",

  // Owners: their bookings are approved automatically, no email sent.
  // Matching is against the saved name, ignoring capitals.
  OWNERS: ["Rob", "Shellee", "Rob & Shellee"],
};
