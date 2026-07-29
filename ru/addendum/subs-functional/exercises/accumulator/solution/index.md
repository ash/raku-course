---
title: 'Решение: Накопитель значений'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 Исходный код можно найти в файле [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Вывод

```
110
135
130
```

## Комментарии

1. Возвращаемый блок *замыкается* на `$total`: эта переменная живёт между вызовами, поэтому каждый
вызов помнит сумму, оставшуюся от предыдущего.

1. `$total += $amount` одновременно обновляет нарастающую сумму и возвращает её, — это и печатает
каждый `say`: сперва `110`, затем `135`, затем `130`.

1. В другом варианте сумма хранится внутри самого блока, в переменной `state`. В отличие от обычной
`my`, переменная `state` инициализируется лишь однажды — при первом выполнении блока — и затем
сохраняет своё значение между последующими вызовами:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Каждый вызов `make-accumulator` порождает новый блок со своей `state $total`, поэтому разные
    накопители остаются независимыми, а замыкание на `$start` по-прежнему снабжает каждый из них
    собственным начальным значением.

{% include nav.html %}
