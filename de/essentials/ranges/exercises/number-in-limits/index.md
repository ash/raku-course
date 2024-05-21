---
title: 'Übung: Wenn die Zahl innerhalb der Grenzen liegt'
---

{% include menu.html %}

## Problem

Schreiben Sie ein Programm, das dazu auffordert, drei Zahlen einzugeben: `$begin`, `$end` und `$n` und `True` oder `False` ausgibt, je nachdem, ob `$n` im Bereich `[$begin, $end)` liegt (einschließlich `$begin`, aber ohne `$end`).

Bitte gehen Sie davon aus, dass die eingegebenen Zahlen die Bedingung erfüllen: `$begin < $end + 1`, fügen Sie jedoch keinen Code hinzu, um dies zu überprüfen.

## Beispiel

Die mögliche Ausgabe des Programms für beide Fälle wird unten gezeigt:

```console
$ raku number-in-limits.raku
Von (einschließlich): 10
Bis (ausschließlich): 20
Was ist die Zahl? 15
True

$ raku number-in-limits.raku
Von (einschließlich): 10
Bis (ausschließlich): 20
Was ist die Zahl? 30
False
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}