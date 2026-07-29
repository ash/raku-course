---
title: 'Решение: Слепете низовете'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say [~] '2', '0', '2', '5';
```

🦋 Намерете програмата във файла [join-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/join-strings.raku).

## Изход

```
2025
```

## Коментари

1. `[~]` вмъква оператора за слепване `~` между низовете.

1. `'2' ~ '0' ~ '2' ~ '5'` дава единствения низ `2025`.

{% include nav.html %}
