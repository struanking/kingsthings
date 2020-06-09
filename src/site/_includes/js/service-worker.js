var cacheName = "kingsthings_v3";
var cacheList = ["/", "index.html", "css/things.css"]; //, "js/color-mode.js"];

self.addEventListener("install", function (event) {
  console.log("SW: Install");
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
        console.log("event.request", event.request);
        return (
          response ||
          fetch(event.request).then(function (response) {
            if (/\.jpg$|.png$|.webp$/.test(event.request.url)) {
              console.log("Cache asset", event.request.url);
              cache.put(event.request, response.clone());
            } else {
              console.log("Do not cache asset", event.request.url);
            }
            return response;
          })
        );
      });
    })
  );
});
