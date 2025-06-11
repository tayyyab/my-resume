'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "74d7a772733a9e4969d121d7e75e15a5",
"version.json": "7b23aef4181b49792ac44f4e298b2f51",
"favicon.ico": "83bd293f51e321374f654cc8ae4adbe3",
"index.html": "14780759fdcad7465051ca138598e3b2",
"/": "14780759fdcad7465051ca138598e3b2",
"main.dart.js": "10ce5c4e5a70e65142699957b23de94c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/mtb-icon-512.png": "a2cc7cac9260238bf2c908fe942a3a35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/mtb-icon-192.png": "70613bdb30b26386f124022f91d68bda",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f35fc45cef7f15c257b7514a97fe730f",
"assets/AssetManifest.json": "db451c1b771745db82eada70ec6a408f",
"assets/NOTICES": "487d15714167ed7e4fe5e5e711fe70d9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "144e73a4373fa7b44351673200c9d79f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3aa25e6f3d70d06d5cb677a7dc34a24a",
"assets/fonts/MaterialIcons-Regular.otf": "d34759c02a2db624520f4810950cb7d8",
"assets/assets/ticket-wallet-logo.png": "605e647332cc16750ad53fdb0a97b82b",
"assets/assets/dart-logo.png": "2d60b0b561379db9f0d8b4122bf4e425",
"assets/assets/google-maps-logo.png": "48abdcaadb5f448f3f6ae501789c1c83",
"assets/assets/bitbucket-logo.png": "4be4c1656ae12c3776d57f5dc03e88f7",
"assets/assets/recall-app-logo.png": "c81ee95afc7fa6aed71f43263f512564",
"assets/assets/gitlab-logo.png": "9389b98d6cc4951d13500e6d0a66f6cd",
"assets/assets/kotlin-logo.png": "a2657f621876b7ce762efaba7dcde6cb",
"assets/assets/firebase-logo.png": "9c06eaec5348ea6977f1b461b974861e",
"assets/assets/bloc-logo.png": "6081b18a42e7d1809eca8529f4d36ff1",
"assets/assets/android-logo.png": "53afb5464f59c310ffe91a1f8365dabb",
"assets/assets/python-logo.png": "0196cda1aaac36dee105e07069d2bce6",
"assets/assets/fast-api-logo.png": "65eff97578977563b8f5982227c2e693",
"assets/assets/sqlight-logo.png": "ca4e3aabd981340ddd7b48c4ea234dd8",
"assets/assets/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/play-logo.png": "c931005ccaee2d3d51ca643d5b786592",
"assets/assets/flutter-logo.png": "4b687d308768d21eb156ab48c6043d5f",
"assets/assets/javascript-logo.png": "34ab0ac49531d9376f9933e1aead7c81",
"assets/assets/LI-In-Bug.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/assets/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/tfm-courier-logo.png": "9476ef6800adf18ce85e0113c53e80ab",
"assets/assets/apple-logo.png": "1bb3f917272ddd5b39fbc3fdec84dc18",
"assets/assets/swift-logo.png": "8d605fab0cbd4088522bda7b42cc510b",
"assets/assets/river-pod-logo.png": "4192184745d9663a2a47a2586ba4ef53",
"assets/assets/whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/website-logo.png": "40b15c2cc5c5876eda1779a8d438d772",
"assets/assets/react-native-logo.png": "9f44be7359de8b16c0f973ef38934f7e",
"assets/assets/github-logo.png": "794bdbe1500f33acf95d8e7d6f2276c4",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
