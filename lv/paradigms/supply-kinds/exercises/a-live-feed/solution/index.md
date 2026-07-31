---
title: 'Risinājums: Vēla pieslēgšanās'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $supplier = Supplier.new;

my @got;
$supplier.emit(1);
$supplier.Supply.tap(-> $v { @got.push($v) });
$supplier.emit(2);
$supplier.emit(3);

say @got;
```

🦋 Atrodiet programmu failā [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Izvade

```
[2 3]
```

## Komentāri

1. `Supplier` ir sūtītājpuse; tā `.Supply` ir tas, kam pieslēdzaties. Dzīva supply pārraida tikai tiem pieslēgumiem, kas klausās **katras izstarošanas brīdī**.

1. `emit(1)` notiek, pirms vispār pastāv kāds pieslēgums, tāpēc tas pazūd — gluži kā ieslēdzot radio pēc tam, kad dziesma jau nospēlēta. Tiek satverti tikai `2` un `3`, kas izstaroti pēc pieslēgšanās, dodot `[2 3]`.

{% include nav.html %}
