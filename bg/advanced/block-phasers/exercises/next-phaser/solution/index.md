---
title: 'Solution: След всяка стъпка'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Изходният код на тази програма можете да намерите във файла [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Изход

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Коментари

1. Фазерът `NEXT` е написан първи, но се изпълнява в *края* на всяка итерация — след като тялото е добавило текущото число към `$sum`.

1. Така след първото преминаване `$sum` е `1`, след второто е `3`, а след третото е `6`. `NEXT` е цикълният аналог на изпълнение на нещо между итерациите, за разлика от `FIRST` (веднъж в началото) и `LAST` (веднъж в края).

{% include nav.html %}
