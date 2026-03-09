self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("budget-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
