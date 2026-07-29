---
title: 'Решение: Слово или цифра'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Исходный код можно найти в файле [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Вывод

```
｢5｣
```

## Комментарии

1. Альтернатива смешивает литерал `cat` с классом символов `\d`. Шаблон совпадает с тем
вариантом, который первым найдётся в строке.

1. В строке `item 5` никакого `cat` нет, а цифра есть, поэтому `\d` совпадает с `5`.

{% include nav.html %}
