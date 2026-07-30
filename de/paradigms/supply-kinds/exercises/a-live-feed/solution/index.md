---
title: 'Lösung: Zu spät eingeschaltet'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $supplier = Supplier.new;

my @got;
$supplier.emit(1);
$supplier.Supply.tap(-> $v { @got.push($v) });
$supplier.emit(2);
$supplier.emit(3);

say @got;
```

🦋 Du findest den Quellcode in der Datei [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Ausgabe

```
[2 3]
```

## Kommentare

1. Der `Supplier` ist die Sendeseite; sein `.Supply` ist das, was Sie anzapfen. Ein Live-Supply sendet nur an die Zapfstellen, die **im Augenblick** jeder Aussendung zuhören.

1. Das `emit(1)` geschieht, bevor eine Zapfstelle besteht, es geht also verloren — wie das Einschalten eines Radiosenders, nachdem ein Lied gelaufen ist. Nur `2` und `3`, nach der Zapfstelle ausgesandt, werden eingefangen, was `[2 3]` ergibt.

{% include nav.html %}
