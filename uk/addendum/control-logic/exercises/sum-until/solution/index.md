---
title: Розв'язання вправи «Сума до понад сотні»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Вивід

```
reached 105 after adding 1..14
```

## Коментарі

1. Голий `loop { }` повторюється вічно; завершує його саме `last if $sum > 100`,
щойно сума переходить поріг.

1. `1 + 2 + … + 14` дорівнює `105` — першій частковій сумі понад `100`, — тож
цикл зупиняється, коли `$n` дорівнює `14`.

1. Цю суму можна перевірити [згорткою](/uk/advanced/metaoperators/reduction):

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
