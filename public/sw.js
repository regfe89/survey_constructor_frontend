importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    // workbox.precaching.precacheAndRoute([{"revision":"201eb39ffb062c0f2b5a0b0ee3e32197","url":"build/bundle.css"},{"revision":"5396ccdb41319aca4c843c9edb6b1e45","url":"global copy.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"global.css"},{"revision":"942c8f4a4d848efcdda95c6225924239","url":"assets/android-chrome-192x192.png"},{"revision":"719d3594fbe1d9e6ac87953e67c72d26","url":"assets/android-chrome-512x512.png"},{"revision":"22d2ad591b7db67cd13a1f959116ec73","url":"assets/apple-touch-icon.png"},{"revision":"3098fda830f6f97615749bd842dafeec","url":"assets/favicon-16x16.png"},{"revision":"7dd7cc43d3a04727a53a8994c838d41c","url":"assets/favicon-32x32.png"},{"revision":"f01db0dec5def844339094e4bfc5994b","url":"assets/mstile-150x150.png"},{"revision":"c64beab291de80970aa4887a5a1c9135","url":"favicon.png"},{"revision":"ea53ea880808b21b78b37dd95ea6e496","url":"assets/safari-pinned-tab.svg"},{"revision":"1195b6d7ac19cef2bc1f95789e7845c5","url":"assets/favicon.ico"},{"revision":"66d517583a4b721a8be18c246f845faa","url":"index.html"},{"revision":"4b47021ae9c63480248ec97d13629b5c","url":"build/bundle.js"},{"revision":"dc71f6f357706a8c81bc92c5bd5c44a2","url":"manifest.json"}]);

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}