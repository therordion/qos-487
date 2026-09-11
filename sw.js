/* QOS · quadringentī octōgintā septem — service worker.
   Стратегия: cache-first. Приложение полностью статично, обновляется
   только сменой CACHE — тогда старый кэш сносится целиком.            */
const CACHE = 'dvakalendarya-487-v41';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png',
  './apple-touch-icon-180.png', './favicon-64.png',
];

self.addEventListener('install', e => {
  // кладём по одному файлу, а не addAll: addAll атомарен, и один недоступный
  // адрес из списка оставил бы без офлайна всё приложение целиком
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(ASSETS.map(u => c.add(u).catch(() => null))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;          // чужие адреса не трогаем
  e.respondWith(
    caches.match(r).then(hit => {
      if (hit) return hit;
      return fetch(r).then(res => {
        // только успешный ответ: 404 от хостинга не должен попадать в кэш
        if (res && res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(r, copy));
        }
        return res;
      }).catch(() => {
        // Сети нет. Навигацию отдаём приложением, всё остальное — честной
        // ошибкой: раньше на любой запрос приезжал HTML со статусом 200.
        if (r.mode === 'navigate') {
          return caches.match('./index.html')
            .then(x => x || new Response('', { status: 504, statusText: 'Offline' }));
        }
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    })
  );
});
