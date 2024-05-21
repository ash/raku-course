---
title: Използване на Docker за стартиране на Raku
---

{% include menu.html %}

Docker изображение на Rakudo Star може да се използва както за стартиране на REPL shell, така и за изпълнение на програма от файл.

За да стартирате shell, изпълнете следната команда. Тя ще изтегли последното изображение `rakudo-star`, ако е необходимо.

```console
$ docker run -it rakudo-star
```
За да изпълните програма, използвайте следната команда:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Добавете флага `--rm`, ако искате да почистите контейнера и да премахнете файловата система, когато контейнерът излезе. Намерете повече инструкции на страницата на проекта.

## Външни връзки

* [Docker изображение](https://hub.docker.com/_/rakudo-star/)
* [Raku docker проект в GitHub](https://github.com/Raku/docker)

{% include nav.html %}