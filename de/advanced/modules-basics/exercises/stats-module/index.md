---
title: Ein Statistik-Modul verwenden
---

{% include menu.html %}

## Problem

Dir liegt ein Modul `Stats.rakumod` vor, das zwei Subroutinen exportiert — `total` und `mean` — wobei `mean` auf `total` aufbaut:

```raku
unit module Stats;

sub total(@numbers) is export {
    [+] @numbers
}

sub mean(@numbers) is export {
    total(@numbers) / @numbers.elems
}
```

Schreibe ein separates Programm, das dieses Modul verwendet und für die Liste `10, 20, 30, 40` sowohl die Summe als auch den Durchschnitt ausgibt.

## Beispiel

Mit dem Modul im Suchpfad ausgeführt, gibt das Programm aus:

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
