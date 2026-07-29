---
title: 'Решение: Начинается с'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 Исходный код можно найти в файле [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Вывод

```
True
```

## Комментарии

1. Якорь `^` заставляет совпадение начинаться с начала строки, а `\d` затем требует, чтобы этот
первый символ был цифрой.

1. Без `^` шаблон срабатывал бы и для цифры, стоящей где-нибудь дальше в строке, например
в `'apples 3'`.

{% include nav.html %}
