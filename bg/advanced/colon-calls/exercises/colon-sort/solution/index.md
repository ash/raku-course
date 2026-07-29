---
title: 'Solution: Sort с двоеточие'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 Можете да намерите изходния код във файла [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Изход

```
(fig pear kiwi apple)
```

## Коментари

1. Двоеточието подава ключа за сортиране на `sort`, без да са необходими скоби около него.

1. `*.chars` е Whatever израз, който означава "броя на символите на всеки елемент". `sort` го използва като ключ, така че думите излизат с най-кратката първа: `fig` (3), след това `pear` и `kiwi` (4), след това `apple` (5).

1. `pear` запазва мястото си пред `kiwi`, защото те са с еднаква дължина и `sort` е стабилно сортиране, запазващо оригиналния ред на равните ключове.

{% include nav.html %}
