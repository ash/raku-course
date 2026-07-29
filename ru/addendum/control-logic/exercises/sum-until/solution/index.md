---
title: 'Решение: Сумма, пока не больше ста'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $sum = 0;
my $n   = 0;

loop {
    $n++;
    $sum += $n;
    last if $sum > 100;
}

say "reached $sum after adding 1..$n";
```

🦋 Исходный код можно найти в файле [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Вывод

```
reached 105 after adding 1..14
```

## Комментарии

1. Голый `loop { }` повторяется вечно; заканчивает его `last if $sum > 100`, как только сумма
переваливает через порог.

1. `1 + 2 + … + 14` равно `105` — первая частичная сумма, превысившая `100`, — поэтому цикл
останавливается с `$n`, равным `14`.

1. Проверить эту сумму можно [свёрткой](/ru/advanced/metaoperators/reduction):

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
