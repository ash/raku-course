---
title: 'Решение: Список символов'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

Программа, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Оба файла с исходным кодом можно найти в директории [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols).

## Вывод

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Комментарии

1. `Circle::` — это пакет модуля, а `.keys` выводит список содержащихся в нём имён, каждое с сигилом.

1. `.elems` подсчитывает эти имена — модуль определяет две переменные `our`, поэтому результат равен `2`.

1. `.keys` не гарантирует определённого порядка, поэтому мы применяем `.sort` для получения стабильного алфавитного результата `($pi $tau)`. Без сортировки два имени могут появиться в любом порядке при разных запусках.

{% include nav.html %}
