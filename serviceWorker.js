const filelist = [ '/kings/index.html',
        '/kings/game.html',
        '/kings/settings.html',
        '/kings/styles/styles.css',
        '/kings/scripts/games.js',
        '/kings/scripts/index.js',
        '/kings/scripts/scripts.js',
        '/kings/scripts/settings.js'
		];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
		'/kings/'
      ]);
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/kings/');
      });
    }
  }));
});