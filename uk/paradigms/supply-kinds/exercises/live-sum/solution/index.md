---
title: Розв'язання вправи «Сума живого струменя»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Вивід

```
60
```

## Коментарі

1. Кожен `.emit` доставляє значення до підключення, яке додає його до `$total`.

1. Після трьох видач сума дорівнює `10 + 20 + 30`, тобто `60`.

{% include nav.html %}
