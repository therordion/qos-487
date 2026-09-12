# QOS — quadringentī octōgintā septem

**A day in two calendars at once.** Every day is shown in two counts: the familiar
Gregorian one, and a special one where the year divides into equal parts with no
remainder.

**The full cycle is 27 years by the special calendar, or 36 by the usual one.** That is
exactly how long it takes before the count returns to the same point of the year. Over
such a span you see the shape of time rather than a list of dates — and time starts to
read differently: more evenly, more naturally.

The name is 487 in Latin — the number of days in the special year.

## What is inside

One app, one file. No build step, no dependencies, no network calls: React is inlined
into `index.html`, the fonts are system ones. It installs as an app on iPhone, Mac,
Android and Windows, and works offline.

Your data — events, notes, settings — stays **on your device** and is never sent
anywhere. Moving it between devices works through a file or through the clipboard.

The interface speaks Russian and English. The language is chosen on first launch and can
be changed later in Settings.

## Files

| file | purpose |
|---|---|
| `index.html` | the whole app: markup, logic, inlined React |
| `sw.js` | offline cache; updates ship by bumping the `CACHE` version |
| `manifest.webmanifest` | name, icons, launch mode |
| `icon-*.png`, `apple-touch-icon-180.png`, `favicon-64.png` | icons |

## Hosting

Any static host will do: GitHub Pages, Cloudflare Pages, Netlify. There is nothing to
build — the files are served as they are. Every path is relative, so the app also works
from a subdirectory such as `name.github.io/repository/`.

## Roadmap

What still needs testing on real devices, and what is planned next — including the
question of syncing between devices without a server, and measuring life in rounds —
is in [ROADMAP.md](ROADMAP.md).

## Licence

Apache License 2.0 — see `LICENSE`.

The build includes React 18.3.1, distributed under the MIT licence. Its copyright notice
is kept in `NOTICE`, as clause 4(d) of Apache-2.0 requires when third-party code is
distributed with the product.

---

# Русский

**Второй календарь к обычному.** Любой день виден сразу в двух счётах: в привычном
грегорианском и в специальном, где год делится на равные части без остатка.

**Полный круг — 27 лет по специальному календарю, или 36 по обычному.** Ровно столько
проходит, прежде чем счёт сходится в ту же точку года. На таком отрезке видно устройство
времени, а не список дат, — и время начинает восприниматься иначе: естественнее и ровнее.

Название — это 487 по-латыни: столько дней в специальном году.

## Что внутри

Одно приложение и один файл. Ни сборки, ни зависимостей, ни обращений к сети: React
встроен в `index.html`, шрифты системные. Ставится как приложение на айфон, макбук,
Android и Windows и работает офлайн.

Данные — события, заметки, настройки — хранятся **только на устройстве** и никуда
не отправляются. Перенос между устройствами — выгрузкой в файл или через буфер обмена.

Интерфейс говорит по-русски и по-английски. Язык выбирается при первом запуске,
потом меняется в настройках.

## Файлы

| файл | зачем |
|---|---|
| `index.html` | приложение целиком: разметка, логика, встроенный React |
| `sw.js` | офлайн-кэш; обновление — сменой версии `CACHE` |
| `manifest.webmanifest` | имя, иконки, режим запуска |
| `icon-*.png`, `apple-touch-icon-180.png`, `favicon-64.png` | иконки |

## Как выложить

Любой статический хостинг: GitHub Pages, Cloudflare Pages, Netlify. Сборка не нужна —
достаточно положить файлы как есть. Все пути относительные, поэтому приложение работает
и из подпапки вида `имя.github.io/репозиторий/`.

## Лицензия

Apache License 2.0 — см. `LICENSE`.

В сборку встроен React 18.3.1, распространяемый по лицензии MIT. Его уведомление
об авторских правах сохранено в `NOTICE` — этого требует пункт 4(d) Apache-2.0
при распространении вместе со сторонним кодом.
