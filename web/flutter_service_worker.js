'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5aee4521210d99a3e3991f64bcab77f6",
"assets/AssetManifest.bin.json": "0296deb0d282c301642bd3d9b17ed890",
"assets/AssetManifest.json": "cb46a25ce65d2c2bbd8faefb5dcad648",
"assets/assets/a1.png.jpg": "be3631776d9b8ff4a0845f1e4315c572",
"assets/assets/ban1.jpg": "d19962db4aeaa5c08cad521e705c28e5",
"assets/assets/ban2.jpg.jpg": "9932996dd7014fe3bc4afc1c3e9924d9",
"assets/assets/ban3.jpg.jpg": "cf289b35df0aef01d5da8bab491779ef",
"assets/assets/ban4.jpg.jpg": "d9b159bb9027f5975ee612cc314f8b7c",
"assets/assets/ban5.jpg.jpg": "87f6e207db3e235c8abe4b17ec35add5",
"assets/assets/ban6.jpg": "be3631776d9b8ff4a0845f1e4315c572",
"assets/assets/ban7.jpg": "2e48f312cc17ce8ecbbea11acc9439ef",
"assets/assets/ban8.jpg": "b52a044c6b2ec84250e3954ba52e4689",
"assets/assets/ban9.jpg": "b343ebc4c213f0c936da9fe67d0e8cae",
"assets/assets/ban_resized1.jpg": "180266ca50417d487bb7724c1d37117a",
"assets/assets/ban_resized2.jpg": "3fc175e39b71da7c069df81ec2634045",
"assets/assets/ban_resized3.jpg": "f43fda9a482de781d65b78e61c331863",
"assets/assets/bbb.jpg": "be3631776d9b8ff4a0845f1e4315c572",
"assets/assets/bjw.png": "ba567cf95a8833404326b6d6678ce60c",
"assets/assets/box_logo.png": "fcda598914d1078dd1570be2d9285f2d",
"assets/assets/box_sized_icon.png": "382d509838832a44bd4824cdc7990576",
"assets/assets/buy_title.png": "26093601229bed2018609a1f87d598bf",
"assets/assets/dduck.jpg": "81abb955a98933014c2872109e76549a",
"assets/assets/dduck2.jpg": "f03341e2719a8f3dc2f4367334b3332a",
"assets/assets/dduck3.jpg": "2da88a7ad4364a56577a3e2b361de6b0",
"assets/assets/dduck4.jpg": "fc1f16a380d14e6b3aa23f11e2cb1ea5",
"assets/assets/del_title.png": "2c8fa8cb8ca2315ecb046c195e21c672",
"assets/assets/duck.jpg": "cdca4d0589a94832ffb65bba632fca9d",
"assets/assets/duck_logo.png": "a5bbc94678c8a553d9fc78b95ef86eb9",
"assets/assets/faker.png": "13f2be2123e98ebdd0c69af40afa91c1",
"assets/assets/gd.png": "7a929687a5cb49ccfbea2cd7f9e37763",
"assets/assets/ggot.jpg": "c5e49dc5b83344580cc2e652c33de329",
"assets/assets/ggun.jpg": "6b5b1dd6075725c21a74bda63cc58527",
"assets/assets/girm.jpg": "93451960cba2c9fd5a61e9c40ffd0951",
"assets/assets/hn.png": "f015d15e42ca8a0ef8fe5ef92002445f",
"assets/assets/hong.jpg": "94d13c4443806eba09aa31db6b9a8d7b",
"assets/assets/item_contents.jpg": "1b83ca615a6c00779afd52ec3870e511",
"assets/assets/item_fig.jpg": "d6af373442391c92d4fc89e835518a9b",
"assets/assets/jang.jpg": "964d0b39d6a46323f64249e470670496",
"assets/assets/jj.png": "76f64ff852bfb737b7e4b65a189449de",
"assets/assets/jug.png": "d42bc132e3fddad60587192ad80e5523",
"assets/assets/jun.png": "e58fe4c5b5f8b2008966bd67855b7f61",
"assets/assets/ljj.png": "1f56df407fa3c999d44147e2cde745b0",
"assets/assets/main.png": "3d166623832db41e07ddeac805a16572",
"assets/assets/main_image1.jpg": "8bdf51fd6fbc45e68227bf1ef415e98e",
"assets/assets/main_image2.jpg": "d1a40c388c9003d51bc6c7b39fdabd5c",
"assets/assets/map.html": "d809fc774534406332e20e820cfe8196",
"assets/assets/map_icon.png": "b3e1ec835820ec2d4bb930b7ee8db067",
"assets/assets/map_sized_icon.png": "c221e50c953d43975364e346613eedd9",
"assets/assets/map_title.png": "cd6e3ed256b075ffab5217a14f60d3c6",
"assets/assets/oo.png": "8f3f721ae16cadc7b541400b848cb086",
"assets/assets/rs.png": "637d4e2293aae5746ee9d803e5aae99b",
"assets/assets/sale_category.png": "adfd8b9942ecbe9b1cdf26240922a7b8",
"assets/assets/sale_logo.png": "e8ccf8a706deca691fc03d6c3673ee3a",
"assets/assets/sale_sized_icon.png": "e2b303f1103897b195d496ccd08e76e7",
"assets/assets/sale_title.png": "933100615cfc97b13a9552413baffe17",
"assets/assets/title.png": "6ee3df9621e2247f8c0effc8ffdc785c",
"assets/assets/title_logo.png": "2c1ae948011940fa2ef286bf031f3e34",
"assets/assets/title_small.png": "b35d5f392efc85df8f8adea05eda28e3",
"assets/assets/truck_logo.png": "befe79386992c53ae89cc96d3c04762d",
"assets/assets/truck_sized_icon.png": "b7d7e39c83f639240460f44ceb44a94f",
"assets/assets/tui.jpg": "3b49d28281dd9d18e4d0fc3b8965d5ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e75b9098d0959f2e916cb5614f42b55e",
"assets/NOTICES": "6eed1752eabfbb4df1c8baf6348ccfdb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_naver_map/assets/icon/location_overlay_icon.png": "c18d8758d9d961b87fb1e8522e89dc66",
"assets/packages/flutter_naver_map/assets/icon/location_overlay_sub_icon.png": "cbcc0806d9a1e8c4b995f7ade0c3bcb9",
"assets/packages/flutter_naver_map/assets/icon/location_overlay_sub_icon_face.png": "7068b8f349f637d4f1e0403da60cd11b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c4589364a16aec900ad2e344684e1147",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "978211fdb96acf8e0a52e66d0d5e520d",
"/": "978211fdb96acf8e0a52e66d0d5e520d",
"main.dart.js": "412c3a237054a45358bdb976e0a4a9a3",
"manifest.json": "b6d5fd9d3ce484da4a2d70820836e31b",
"version.json": "cb3295c4c5059a27bf1c265d4a3336cc"};
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
