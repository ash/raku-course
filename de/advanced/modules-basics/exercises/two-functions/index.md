---
title: Zwei Funktionen in einem Modul
---

{% include menu.html %}

## Problem

Erstelle ein Modul namens `Calc` in einer Datei `Calc.rakumod`, das zwei Subroutinen exportiert: `add` und `mul`, die die Summe bzw. das Produkt ihrer beiden Argumente zurückgeben.

Schreibe dann ein separates Programm, das das Modul verwendet, um `add(3, 4)` und `mul(3, 4)` jeweils in einer eigenen Zeile auszugeben.

## Beispiel

Mit dem Modul im Suchpfad ausgeführt, gibt das Programm aus:

```console
$ raku -I. calc.raku
7
12
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
