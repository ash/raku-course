---
title: 'Solution: Броене и сума'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Можете да намерите пълния код във файла [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Резултат

```
4
41
```

## Коментари

1. Константите са дефинирани като двойки, така че всяка получава стойността, която сме избрали, вместо автоматичната номерация от нула.

1. `.enums` връща карта от името на всяка константа към нейната стойност. `.elems` брои записите — има четири монети.

1. `.values` извлича само числата зад имената, а `.sum` ги сумира: `1 + 5 + 10 + 25` е `41`.

{% include nav.html %}
