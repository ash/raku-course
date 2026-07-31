---
title: 'Risinājums: Dzīvās plūsmas summa'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $supplier = Supplier.new;

my $total = 0;
$supplier.Supply.tap(-> $v { $total += $v });

$supplier.emit(10);
$supplier.emit(20);
$supplier.emit(30);

say $total;
```

🦋 Atrodiet programmu failā [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Izvade

```
60
```

## Komentāri

1. Katrs `.emit` piegādā vērtību pieslēgumam, kas to pieskaita `$total`.

1. Pēc trim izstarojumiem summa ir `10 + 20 + 30`, tas ir, `60`.

{% include nav.html %}
