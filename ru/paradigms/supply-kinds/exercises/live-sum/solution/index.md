---
title: 'Решение: Сумма живого потока'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $supplier = Supplier.new;

my $total = 0;
$supplier.Supply.tap(-> $v { $total += $v });

$supplier.emit(10);
$supplier.emit(20);
$supplier.emit(30);

say $total;
```

🦋 Исходный код можно найти в файле [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Вывод

```
60
```

## Комментарии

1. Каждый вызов `.emit` доставляет значение подключению, а оно прибавляет его к `$total`.

1. После трёх выдач сумма равна `10 + 20 + 30`, то есть `60`.

{% include nav.html %}
