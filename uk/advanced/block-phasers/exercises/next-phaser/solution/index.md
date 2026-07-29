---
title: 'Solution: Після кожного кроку'
translations_gpt: true
---

{% include menu.html %}

Ось можливий розв'язок завдання.

## Код

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Вихідний код можна знайти у файлі [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Вивід

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Коментарі

1. Фазер `NEXT` написаний першим, але він запускається *наприкінці* кожної ітерації — після того як тіло додало поточне число до `$sum`.

1. Тому після першого проходу `$sum` дорівнює `1`, після другого — `3`, а після третього — `6`. `NEXT` — це циклічний аналог виконання чогось між ітераціями, на відміну від `FIRST` (один раз на початку) та `LAST` (один раз наприкінці).

{% include nav.html %}
