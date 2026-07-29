---
title: 'Решение: От две до четири'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 Намерете програмата във файла [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Изход

```
｢abcd｣
```

## Коментари

1. `\w ** 2..4` съпоставя от два до четири словесни знака.

1. Бидейки лаком, той взема толкова, колкото диапазонът позволява — четири, — така че съвпадението е `abcd`.

{% include nav.html %}
