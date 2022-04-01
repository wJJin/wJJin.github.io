/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "73672c3f9957438fc6ea04e3226549db"
  },
  {
    "url": "assets/css/0.styles.344410ef.css",
    "revision": "5e99352c23a3735b4f7eeee837131d76"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77d623d1.js",
    "revision": "72fad40b96b550725717fb0a1a0529fd"
  },
  {
    "url": "assets/js/11.960ca58e.js",
    "revision": "5a2305ebe468fc94cc170d92fb883feb"
  },
  {
    "url": "assets/js/12.3bbc039a.js",
    "revision": "69ce45722f367d000cfe3f0e00a68dc7"
  },
  {
    "url": "assets/js/13.3ce90603.js",
    "revision": "8091ac3996470cf3ef67525427b4ca67"
  },
  {
    "url": "assets/js/14.8d0a4ffd.js",
    "revision": "8ca2287e2da528c1430156004fa56fac"
  },
  {
    "url": "assets/js/15.08d50125.js",
    "revision": "88a37973eafea0daa755c76c3fe1fecd"
  },
  {
    "url": "assets/js/16.2e900227.js",
    "revision": "ce5fa09bfd13ced24183c4daaf1969f3"
  },
  {
    "url": "assets/js/2.229ffa8a.js",
    "revision": "b38832ed653b3836a5bbdf17e7a2e97e"
  },
  {
    "url": "assets/js/3.5ee1d7c6.js",
    "revision": "a8e7e927d6f78e5a1e91ede28fc0fa2a"
  },
  {
    "url": "assets/js/4.ac0ba06e.js",
    "revision": "e3fd4264e6d5fd1431f9593971d3a36b"
  },
  {
    "url": "assets/js/5.a03455d7.js",
    "revision": "54cf5780d4873eac30849645832e50f7"
  },
  {
    "url": "assets/js/6.f4344879.js",
    "revision": "7e6f641756043f6033f1b1e01fccb6b1"
  },
  {
    "url": "assets/js/7.42838c95.js",
    "revision": "e36ad9285019cdf9b2ebdc16a74a0dae"
  },
  {
    "url": "assets/js/8.c3b41514.js",
    "revision": "8d5191a9e128da520cd22b808811fc2d"
  },
  {
    "url": "assets/js/9.e8124ed9.js",
    "revision": "aa49ee63477331810b34af01567502d8"
  },
  {
    "url": "assets/js/app.c0dc3471.js",
    "revision": "d359db5c66bcc90dd3a9dd53fe796b46"
  },
  {
    "url": "django/start.html",
    "revision": "dc5c736e38d0eb2788dcc49c93c6974e"
  },
  {
    "url": "images/maskable_icon_x128.png",
    "revision": "3efb27691294b081f6b5e3de552cb181"
  },
  {
    "url": "images/maskable_icon_x192.png",
    "revision": "ef8082f2f2b13ed00faeccb9e290cf0c"
  },
  {
    "url": "images/maskable_icon_x384.png",
    "revision": "6cb38020d6542cea43ecf44a3b6a3dd2"
  },
  {
    "url": "images/maskable_icon_x48.png",
    "revision": "d305a1b17751d6d8001aec0382660b4b"
  },
  {
    "url": "images/maskable_icon_x512.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "images/maskable_icon_x72.png",
    "revision": "660309aed4d8fdad541c46e28fd779f1"
  },
  {
    "url": "images/maskable_icon_x96.png",
    "revision": "1cc1731bb5da7da8631f4f59359677ad"
  },
  {
    "url": "images/maskable_icon.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "index.html",
    "revision": "0ed6a5288ff65e0c4ba8ccf56c09dd8d"
  },
  {
    "url": "intro.html",
    "revision": "86b57f5a4bc9fe8092b24b14aeeb0e5a"
  },
  {
    "url": "js/start.html",
    "revision": "be04aa2abe6079fa76a8ca12568d0941"
  },
  {
    "url": "react/start.html",
    "revision": "0f61c8d200bbea819483de2849225c55"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
