---
title: 'Solution: Пребройте уникалните'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Можете да намерите пълния код във файла [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Резултат

```
7
```

## Коментари

1. Подаването на масива към `set` създава множество от неговите стойности. Тъй като множеството запазва само различни стойности, повтарящите се числа се свиват до едно.

1. Методът `elems` след това връща броя на различните стойности, който е `7`.

{% include nav.html %}
