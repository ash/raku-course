---
title: 'Решение: Пребройте съвпаденията'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Намерете програмата във файла [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Изход

```
5
```

## Коментари

1. Класът от знаци `<[aeiou]>` съпоставя една гласна, а наречието `:g` връща всяко такова съвпадение, а не само първото.

1. Резултатът се държи като списък, така че `.elems` преброява съвпаденията: петте гласни в `education` (e, u, a, i, o).

{% include nav.html %}
