---
title: Розв'язання вправи «Склейте рядки»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say [~] '2', '0', '2', '5';
```

🦋 Знайдіть програму у файлі [join-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/join-strings.raku).

## Вивід

```
2025
```

## Коментарі

1. `[~]` вставляє між рядками оператор конкатенації `~`.

1. `'2' ~ '0' ~ '2' ~ '5'` дає єдиний рядок `2025`.

{% include nav.html %}
