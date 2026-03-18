const CACHE_NAME = 'snapsolve-v2';
const assets = [
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
