// The previous Flutter version of this site registered a service worker under this name.
// Returning visitors' browsers re-fetch it, get this version, clear the old cached app
// and unregister — so they see the current site. Safe to delete after a few months.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((client) => client.navigate(client.url));
  })());
});
