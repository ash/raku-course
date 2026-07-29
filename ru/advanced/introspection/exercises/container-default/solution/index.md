---
title: 'Решение: Значение по умолчанию контейнера'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Исходный код можно найти в файле [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Вывод

```
0
0
```

## Комментарии

1. Трейт `is default(0)` задаёт контейнеру значение по умолчанию. Поскольку ничего не было присвоено, при чтении `$count` возвращается это значение, и первая строка печатает `0`.

1. `.VAR.default` запрашивает у самого контейнера его объявленное значение по умолчанию, которое тоже равно `0`. Без этого трейта нетипизированный контейнер имел бы значение по умолчанию `(Any)`.

{% include nav.html %}
