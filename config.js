// ── Puydonege Booking Calendar configuration ─────────────────────────

window.PUYDONEGE_CONFIG = {
  // From Supabase → Project Settings → API
  SUPABASE_URL: "https://jsynxpgctidnabvxecnb.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzeW54cGdjdGlkbmFidnhlY25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NTMxNjcsImV4cCI6MjEwMjUyOTE2N30.RHlOyBdS77y37E89grijI_1akxPwAy7vOXRvi1_CqyE",

  // Who the "Email the approvers" button is addressed to
  NOTIFY_EMAIL: "Robert.lawson@rattlerow.co.uk",

  // Owners: their bookings are approved automatically, no email sent.
  // Matching is against the saved name, ignoring capitals.
  OWNERS: ["Rob", "Shellee", "Rob & Shellee"],
};