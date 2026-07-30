---
title: 'Lösung: Summieren Sie einen Live-Strom'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $supplier = Supplier.new;

my $total = 0;
$supplier.Supply.tap(-> $v { $total += $v });

$supplier.emit(10);
$supplier.emit(20);
$supplier.emit(30);

say $total;
```

🦋 Du findest den Quellcode in der Datei [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Ausgabe

```
60
```

## Kommentare

1. Jedes `.emit` liefert einen Wert an die Zapfstelle, die ihn zu `$total` addiert.

1. Nach den drei Aussendungen ist die Summe `10 + 20 + 30`, also `60`.

{% include nav.html %}
