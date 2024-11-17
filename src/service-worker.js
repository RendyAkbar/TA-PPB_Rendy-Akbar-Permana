import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

// Routing untuk file statis (JavaScript, CSS, dll.)
registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Routing untuk API OpenTripMap
registerRoute(
  ({ url }) => url.hostname === 'opentripmap-places-v1.p.rapidapi.com',
  new NetworkFirst({
    cacheName: 'opentripmap-api',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50, // Jumlah maksimum entri di cache
        maxAgeSeconds: 24 * 60 * 60, // Simpan data selama 1 hari
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.hostname === 'opentripmap-places-v1.p.rapidapi.com',
  new CacheFirst({
    cacheName: 'opentripmap-api',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50, // Simpan maksimal 50 entri
        maxAgeSeconds: 7 * 24 * 60 * 60, // Cache berlaku selama 7 hari
      }),
    ],
  })
);

registerRoute(
  ({ url }) =>
    url.hostname === 'opentripmap-places-v1.p.rapidapi.com' &&
    url.pathname.includes('/places/bbox'),
  new CacheFirst({
    cacheName: 'architecture-places',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50, 
        maxAgeSeconds: 7 * 24 * 60 * 60, // Cache berlaku selama 7 hari
      }),
    ],
  })
);

// Handling semua permintaan navigasi dengan index.html
registerRoute(
  ({ request, url }) => request.mode === 'navigate',
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
