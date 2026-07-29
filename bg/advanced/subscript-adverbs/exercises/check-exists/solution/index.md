---
title: 'Solution: Съществува ли ключът'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 Можете да намерите изходния код във файла [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Изход

```
False
```

## Коментари

1. Наречието `:exists` връща дали ключът е наличен, без да извлича стойността.

1. В хеша няма ключ `z`, затова се връща `False` — и за разлика от обикновено търсене, ключът не се създава като страничен ефект.

{% include nav.html %}
