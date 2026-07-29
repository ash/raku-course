---
title: 'Решение: Сума до над сто'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Изход

```
reached 105 after adding 1..14
```

## Коментари

1. Голият `loop { }` се повтаря вечно; прекратява го именно `last if $sum > 100`, щом
сумата премине прага.

1. `1 + 2 + … + 14` е `105` — първата частична сума над `100`, — така че цикълът спира,
когато `$n` е `14`.

1. Можете да проверите тази сума със [свиване](/bg/advanced/metaoperators/reduction):

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
