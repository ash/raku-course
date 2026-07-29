---
title: 'Решение: Первый нецифровой символ'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say '42abc' ~~ /\D/;
```

🦋 Исходный код можно найти в файле [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Вывод

```
｢a｣
```

## Комментарии

1. `\D` противоположен `\d`: он соответствует любому символу, который не является цифрой.

1. Первые два символа — цифры, поэтому совпадение начинается с `a`.

{% include nav.html %}
