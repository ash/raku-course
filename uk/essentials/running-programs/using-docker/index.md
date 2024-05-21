---
title: Використання Docker для запуску Raku
---

{% include menu.html %}

Образ Docker Rakudo Star можна використовувати як для запуску REPL оболонки, так і для виконання програми з файлу.

Щоб запустити оболонку, виконайте наступну команду. Вона завантажить останній образ `rakudo-star`, якщо це необхідно.

```console
$ docker run -it rakudo-star
```
Щоб виконати програму, використовуйте наступну команду:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Додайте прапорець `--rm`, якщо хочете очистити контейнер і видалити файлову систему після завершення роботи контейнера. Більше інструкцій можна знайти на сторінці проекту.

## Зовнішні посилання

* [Образ Docker](https://hub.docker.com/_/rakudo-star/)
* [Проект Raku Docker на GitHub](https://github.com/Raku/docker)

{% include nav.html %}