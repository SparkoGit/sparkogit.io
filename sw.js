var cacheName = 'AppsWebSolutions-pwa';
var filesToCache = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/main.js',
  './assets/app.js',
  './assets/vendor/bootstrap/css/bootstrap.min.css',
  './assets/vendor/icofont/icofont.min.css',
  './assets/vendor/boxicons/css/boxicons.min.css',
  './assets/vendor/animate.css/animate.min.css',
  './assets/vendor/venobox/venobox.css',
  './assets/vendor/aos/aos.css',
  './assets/vendor/jquery/jquery.min.js',
  './assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
  './assets/vendor/jquery.easing/jquery.easing.min.js',
  './assets/vendor/php-email-form/validate.js',
  './assets/vendor/jquery-sticky/jquery.sticky.js',
  './assets/vendor/venobox/venobox.min.js',
  './assets/vendor/waypoints/jquery.waypoints.min.js',
  './assets/vendor/counterup/counterup.min.js',
  './assets/vendor/isotope-layout/isotope.pkgd.min.js',
  './assets/vendor/aos/aos.js',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
