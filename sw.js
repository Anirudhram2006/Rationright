const CACHE_NAME = 'rationright-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/assets/fingerprint.png',
  '/assets/grains1.jpg',
  '/assets/grains2.jpg',
  '/assets/grains3.jpg',
  '/assets/icon-192.png',
  '/assets/icon-512.png',
  '/assets/splash.png',
  // add other assets you want cached
];

// Install event - cache files
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
