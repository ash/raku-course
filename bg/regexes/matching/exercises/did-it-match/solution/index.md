---
title: 'Решение: Съвпадна ли?'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say so 'Hello, World' ~~ /World/;
```

🦋 Намерете програмата във файла [did-it-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/did-it-match.raku).

## Изход

```
True
```

## Коментари

1. Успешното съпоставяне е истинна стойност, но се отпечатва като обект на съвпадението. Функцията `so` го превръща в обикновено `True` или `False`.

{% include nav.html %}
