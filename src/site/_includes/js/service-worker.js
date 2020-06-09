var cacheName = "v2";
var cacheList = [
  "/",
  "index.html",
  "css/things.css",
  "images/wp-glasses.png",
  "images/wp-glasses.webp",
]; //, "js/color-mode.js"];

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
  console.log("SW: checking for cached asset");
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("SW: Using cached asset");
        return response;
      }
      return fetch(event.request);
    })
  );
});
