---
title: 'Решение: Сума на жива струя'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Изход

```
60
```

## Коментари

1. Всяко `.emit` доставя стойност до включването, което я добавя към `$total`.

1. След трите подавания сумата е `10 + 20 + 30`, тоест `60`.

{% include nav.html %}
