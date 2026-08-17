// Minimal service worker: cache the app shell so it opens fast; data always comes from the network.
const CACHE = "puydonege-v1";
const SHELL = [".", "index.html", "config.js", "manifest.webmanifest",
  "assets/house.jpg", "assets/icon-192.png", "assets/icon-512.png", "assets/apple-touch-icon.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // never cache Supabase/EmailJS calls
  e.respondWith(fetch(e.request).then((r) => {
    const copy = r.clone();
    caches.open(CACHE).then((c) => c.put(e.request, copy));
    return r;
  }).catch(() => caches.match(e.request)));
});
