---
title: 'Решение: Что это такое'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 Исходный код можно найти в файле [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Вывод

```
True
False
```

## Комментарии

1. `$a.WHAT` — это не строка `Int`, а настоящий объект типа `Int`, поэтому `=== Int` сравнивает его с самим типом и возвращает `True`.

1. `$b` содержит строку, поэтому его `WHAT` — это `Str`; сравнение с `Int` даёт `False`. Именно это делает `WHAT` полезным в условиях, а не только при выводе.

{% include nav.html %}
