---
title: 'Solution: Финално съобщение'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Можете да намерите изходния код във файла [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Изход

```
processed 3 items
```

## Коментари

1. Phaser `END` е написан преди цикъла, но се изпълнява последен — след като основният код е завършил. До този момент `$count` е бил увеличен три пъти.

1. Тъй като phaser-ът затваря над `$count`, той чете *крайната* стойност на променливата, а не `0`, която е имала, когато phaser-ът се е появил в изходния код. Това е обичайната причина да се поставя обобщение в `END`.

{% include nav.html %}
