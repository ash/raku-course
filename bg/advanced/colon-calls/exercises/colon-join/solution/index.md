---
title: 'Solution: Join с двоеточие'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say <a b c>.reverse.join: '-';
```

🦋 Можете да намерите изходния код във файла [colon-join.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-join.raku).

## Изход

```
c-b-a
```

## Коментари

1. `.reverse` запазва обикновената си форма, защото е по средата на веригата. `join` идва последен, затова може да използва двоеточието, подавайки `'-'` точно както би направил `join('-')`.

1. Списъкът, обърнат до `c, b, a`, след това се обединява с тирета, давайки `c-b-a`. Формата с двоеточие работи с обикновени стойности, не само с блокове.

{% include nav.html %}
