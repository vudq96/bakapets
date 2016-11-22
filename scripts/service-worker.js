var cacheName = 'bakapets-shell-content-v1';
var filesToCache = [
  '/styles/inline.css',
  '/scripts/app.js',
  '/',
];

self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell'); 
      return cache.addAll(filesToCache);
    })
  );
});
