---
title: 'Решение: Прочитайте константу'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

Программа `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 Оба исходных файла можно найти в каталоге [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant).

## Вывод

```console
$ raku -I. read-pi.raku
3.14
```

## Комментарии

1. `need Circle` загружает модуль, но не импортирует никаких имён, поэтому просто `$pi`
распознано не будет.

1. До переменной `our` добираются через имя модуля — она записывается как `$Circle::pi`.

{% include nav.html %}
