---
title: 'Solvo: Sumu vivan fluon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $supplier = Supplier.new;

my $total = 0;
$supplier.Supply.tap(-> $v { $total += $v });

$supplier.emit(10);
$supplier.emit(20);
$supplier.emit(30);

say $total;
```

🦋 Vi povas trovi la fontkodon en la dosiero [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Eligo

```
60
```

## Komentoj

1. Ĉiu `.emit` liveras valoron al la konekto, kiu aldonas ĝin al `$total`.

1. Post la tri eligoj la sumo estas `10 + 20 + 30`, tio estas `60`.

{% include nav.html %}
