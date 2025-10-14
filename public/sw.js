// Minimal service worker file to avoid 404s during development.
// This service worker intentionally does nothing.
self.addEventListener("install", (event) => {
  // skip waiting to activate immediately in dev
  self.skipWaiting?.();
});

self.addEventListener("activate", (event) => {
  // claim clients so it's active
  self.clients?.claim?.();
});

// Respond with a simple 204 for any fetch to keep dev server quiet.
self.addEventListener("fetch", (event) => {
  // Let the network handle requests normally; no caching performed here.
});
