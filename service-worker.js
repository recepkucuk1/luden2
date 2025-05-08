const cacheName = "hangi-ses-v1";
const filesToCache = [
  "index.html",
  "style.css",
  "script.js",
  "karga.png",
  "tavuk.png",
  "karga.mp3",
  "tavuk.mp3",
  "manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
