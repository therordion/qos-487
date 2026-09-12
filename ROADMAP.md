# Roadmap

## Where things stand

The app is live at **https://therordion.github.io/qos-487/** and installs as an app on
iPhone, Mac, Android and Windows. It works offline, keeps all data on the device, speaks
Russian and English, and carries twelve themes.

What is done: the calendar model and its arithmetic, the two grids and the ring, events
with twelve repeat modes, notes, `.ics` export, offline cache, language switching, and
data transfer between devices by file or clipboard.

## To be tested on real devices

Some things cannot be checked from a desktop browser. They need a real device, and they
are listed here so nothing is forgotten.

**iPhone** (opened in Safari; further checks pending)

- **Copy data** — writing to the clipboard is refused in an automated browser, so the
  happy path has never been seen. The fallback (the panel opens with the text ready to
  copy by hand) is known to work.
- **`.ics` download** — what Safari does with the exported calendar file.
- **Storage separation** — an app on the home screen keeps its own storage, apart from
  Safari. Confirm the data is where it is expected.
- **Safe areas** — that the section bar does not slip under the gesture strip and the
  header does not sit under the notch.
- **Going to the background** — add an event, switch away, come back: is the change still
  there?
- **Offline** — aeroplane mode, open from the home screen.
- **Notifications** — the permission prompt and whether a reminder actually fires.
- **Add to Home Screen** — the icon, the name, the full-screen launch.

**Mac**

- Install through Safari (File → Add to Dock) and through Chrome, and confirm the same
  checks as above.

**Android** (installed and working)

- The app is installed and data transfers have been tested on it. Still to check: offline
  launch, notifications, and what an update looks like when a new version is published.

**Windows 11**

- Installation through Chrome and through Edge has not been tried yet.
- The update path is untested everywhere: the service worker picks up a new build on the
  second launch, and that has never been observed on a real device.

## Planned features

### Sync between devices, without a server

**Question asked:** can an iPhone keep its data in sync with a Mac automatically, and the
same for Windows 11 with Android — with no server anywhere?

**Answer: no, not automatically.** A web app on iOS cannot reach iCloud Drive, cannot run
in the background, has no access to iCloud key-value storage (that belongs to native
apps), and Safari does not sync website data between devices — iCloud syncs bookmarks,
tabs and passwords, not the storage of a site. On Chrome and Edge the same holds: browser
sync covers bookmarks, passwords and history, not PWA storage.

So automatic sync needs something in the middle. The options, cheapest first:

1. **A small serverless endpoint** — a Cloudflare Worker with KV or D1, free tier, one
   shared code or secret. It is a server, just not one anybody has to maintain. Data would
   leave the device, so the promise "your data never leaves the device" would have to be
   rewritten.
2. **Manual transfer** — what exists today: a file, or the clipboard through any app that
   syncs itself.
3. **A shared file in a cloud folder** — does not work: a web app cannot watch a folder,
   and iOS gives no filesystem access.

There is no fourth option. WebRTC needs a signalling server, and `BroadcastChannel` or a
shared worker only reach as far as one device.

**In short:** "no server at all" and "updates by itself" cannot both be true. The choice
is between automatic sync that needs a tiny backend, and manual transfer that is honest
about being manual.

### Measuring life in rounds

One round is 36 ordinary years, 13 149 days. **Three rounds — 108 years — is already a
feat. Four, 144 years, is beyond today's record. Five, 180 years, is out of reach.** That
ratio may well change as medicine and technology advance, and the app should be ready to
follow it.

The plan: let a person enter a birth date, and have the app count the rounds, years and
days lived, mark the milestones (one round, two, three) and offer the next one as a
target. The point is not a counter but a change of scale: **to measure life in rounds
rather than years, and to make living longer something to aim at.**

This is now reflected in the app's description in both languages.

---

# Планы (по-русски)

## Где мы сейчас

Приложение живёт по адресу **https://therordion.github.io/qos-487/** и ставится как
приложение на айфон, макбук, Android и Windows. Работает офлайн, данные хранит только
на устройстве, говорит по-русски и по-английски, несёт двенадцать тем.

Сделано: модель календаря и её арифметика, две сетки и кольцо, события с двенадцатью
режимами повтора, заметки, выгрузка `.ics`, офлайн-кэш, смена языка и перенос данных
между устройствами файлом или через буфер обмена.

## Что предстоит испытать на живых устройствах

Часть вещей из настольного браузера не проверить. Нужно настоящее устройство, и список
здесь — чтобы ничего не забылось.

**Айфон** (открылось в Safari, остальное впереди)

- **Скопировать данные** — запись в буфер в автоматическом браузере отказывает, так что
  удачный путь ни разу не видели. Запасной (панель открывается с готовым текстом) работает.
- **Скачивание `.ics`** — что Safari сделает с выгруженным файлом календаря.
- **Разделение хранилища** — приложение с домашнего экрана держит данные отдельно
  от Safari. Убедиться, что они там, где ожидаются.
- **Безопасные зоны** — не залезает ли панель разделов под полоску жеста, а шапка под «остров».
- **Уход в фон** — добавить событие, свернуть, вернуться: правка на месте?
- **Офлайн** — авиарежим, запуск с домашнего экрана.
- **Уведомления** — запрос разрешения и срабатывает ли напоминание.
- **Установка на домашний экран** — иконка, имя, запуск во весь экран.

**Макбук**

- Установка через Safari (Файл → Добавить в Dock) и через Chrome, те же проверки.

**Android** (установлено и работает)

- Приложение установлено, перенос данных на нём проверен. Осталось: запуск офлайн,
  уведомления и то, как выглядит обновление при выходе новой версии.

**Windows 11**

- Установка через Chrome и Edge ещё не пробовалась.
- Обновление не проверено нигде: service worker подхватывает новую сборку со второго
  запуска, и на живом устройстве этого ещё не видели.

## Что в планах

### Синхронизация между устройствами без сервера

**Вопрос:** можно ли сделать так, чтобы данные на айфоне сами сходились с маком, а на
Windows 11 — с Android, и чтобы нигде не было сервера?

**Ответ: автоматически — нет.** Веб-приложение на iOS не дотянется до iCloud Drive,
не умеет работать в фоне, не имеет доступа к хранилищу ключ-значение iCloud (это для
нативных приложений), а Safari не синхронизирует данные сайтов между устройствами:
iCloud синхронизирует закладки, вкладки и пароли, но не хранилище сайта. У Chrome и Edge
то же самое — синхронизация охватывает закладки, пароли и историю, но не память PWA.

Значит, для автоматической синхронизации нужно что-то посередине. Варианты, от дешёвого:

1. **Небольшая бессерверная функция** — Cloudflare Worker с хранилищем, бесплатный тариф,
   один общий код. Это сервер, но такой, который не надо обслуживать. Данные покинут
   устройство, и обещание «данные не уходят с устройства» придётся переписать.
2. **Перенос руками** — то, что есть сейчас: файлом или через буфер обмена.
3. **Общий файл в облачной папке** — не работает: веб-приложение не умеет следить
   за папкой, а iOS не даёт доступа к файловой системе.

Четвёртого варианта нет. WebRTC требует сервера для знакомства, а `BroadcastChannel`
и общий воркер дотягиваются только в пределах одного устройства.

**Коротко:** «совсем без сервера» и «обновляется само» не могут быть верны одновременно.
Выбор между автоматической синхронизацией, которой нужен крошечный бэкенд, и переносом
руками, который честно называется ручным.

### Жизнь, измеренная кругами

Один круг — 36 обычных лет, 13 149 дней. **Три круга, 108 лет, — уже подвиг. Четыре,
144 года, — за пределом нынешнего рекорда. Пять, 180 лет, — невозможно.** Это
соотношение вполне может измениться с развитием медицины и технологий, и приложение
должно быть готово за этим пойти.

План: дать человеку ввести дату рождения, чтобы приложение считало прожитые круги, годы
и дни, отмечало рубежи (один круг, два, три) и предлагало следующий как цель. Смысл не
в счётчике, а в смене масштаба: **мерить жизнь кругами, а не годами, и сделать «прожить
дольше» тем, к чему стремятся.**

Это уже отражено в описании приложения на обоих языках.
