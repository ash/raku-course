---
title: 'Solution: Свържете скалар'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Можете да намерите изходния код във файла [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Резултат

```
9
1
```

## Коментари

1. Свързването с `:=` прави `$bound` друго име за същия контейнер като `$source`, а не негово копие. Затова промяната на `$source` е видима чрез `$bound`, което отпечатва `9`.

1. Обикновеното присвояване с `=` копира стойността в отделен контейнер, така че `$copy` не е засегнат от по-късната промяна и все още отпечатва `1`.

1. Виждането на двете едно до друго е целият смисъл: `:=` споделя контейнер, `=` дублира стойността.

{% include nav.html %}
