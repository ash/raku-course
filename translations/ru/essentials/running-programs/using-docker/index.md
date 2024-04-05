---
title: Использование Docker для запуска Raku
---

{% include menu.html %}

Образ Rakudo Star на Docker может быть использован как для запуска командной
оболочки REPL, так и для выполнения программы из файла.

Чтобы запустить REPL, выполните следующую команду. Она подтянет самый последний
образ `rakudo-star`, если потребуется.

```console
$ docker run -it rakudo-star
```

Чтобы запустить программу, выполните следующую команду:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Добавьте флаг `--rm`, если вы хотите почистить контейнер и удалить файловую систему,
когда контейнер закончит работу. Вы можете найти больше информации на
странице проекта.

## Внешние ссылки

* [Docker образ](https://hub.docker.com/_/rakudo-star/)
* [Raku Docker проект на GitHub](https://github.com/Raku/docker)

{% include nav.html %}
