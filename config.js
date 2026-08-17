// ── Puydonege Booking Calendar configuration ─────────────────────────
// Fill these in once, following the README. Nothing else needs editing.

window.PUYDONEGE_CONFIG = {
  // From Supabase → Project Settings → API
  SUPABASE_URL: "PASTE_SUPABASE_URL_HERE",
  SUPABASE_ANON_KEY: "PASTE_SUPABASE_ANON_KEY_HERE",

  // From EmailJS → Account (public key) and Email Services / Templates
  EMAILJS_PUBLIC_KEY: "PASTE_EMAILJS_PUBLIC_KEY_HERE",
  EMAILJS_SERVICE_ID: "PASTE_EMAILJS_SERVICE_ID_HERE",
  EMAILJS_TEMPLATE_ID: "PASTE_EMAILJS_TEMPLATE_ID_HERE",

  // Who gets notified when a booking needs approval
  NOTIFY_EMAIL: "Robert.lawson@rattlerow.co.uk",

  // Owners: their bookings are approved automatically, no email sent.
  // Matching is against the saved name, ignoring capitals.
  OWNERS: ["Rob", "Shellee", "Rob & Shellee"],
};
