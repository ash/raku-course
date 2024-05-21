---
title: Interpolieren von Arrays
---

{% include menu.html %}

Um Array-Elemente in doppelt-quotierten Zeichenketten zu interpolieren, schreiben Sie es so, wie Sie es in einem Programm selbst tun würden: `@data[1]`. Um das gesamte Array zu interpolieren, fügen Sie ein Paar leere Klammern hinzu: `@data[]`. Das folgende Programm veranschaulicht diesen Ansatz:

```raku
my @data = 10, 20, 30;

say "Erstes: @data[0], letztes: @data[1]";
say "Alle Elemente: @data[]";
```

Dieses Programm gibt die angeforderten Daten aus:

```console
$ raku t.raku 
Erstes: 10, letztes: 20
Alle Elemente: 10 20 30
```

{% include nav.html %}