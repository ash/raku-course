---
title: 'Решение: После каждого шага'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Исходный код можно найти в файле [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Вывод

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Комментарии

1. Фазер `NEXT` написан первым, но выполняется в *конце* каждой итерации -- после того как тело добавило текущее число к `$sum`.

1. Поэтому после первого прохода `$sum` равен `1`, после второго -- `3`, а после третьего -- `6`. `NEXT` -- это аналог выполнения чего-либо между итерациями, в отличие от `FIRST` (один раз в начале) и `LAST` (один раз в конце).

{% include nav.html %}
