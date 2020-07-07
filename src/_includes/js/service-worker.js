var cacheName = `kingsthings_v2`;
var cacheList = ["/", "index.html"]; // "css/things.css", "js/color-mode.js"];

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(cacheList);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("SW: Activate");
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            if (/\.jpg$|.png$|.webp$/.test(event.request.url)) {
              console.log("Cache asset", event.request.url);
              cache.put(event.request, response.clone());
            }
            return response;
          })
        );
      });
    })
  );
});
