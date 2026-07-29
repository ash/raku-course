---
title: 'Решение: Нормализирайте празните знаци'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Намерете програмата във файла [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Изход

```
too many spaces
```

## Коментари

1. `.trim` маха водещите и крайните интервали; заместването после заменя всяка поредица
от празни знаци `\s+` с един интервал.

1. Наречието `:g` прави заместването глобално, така че се свиват *всички* междини, а не
само първата.

{% include nav.html %}
