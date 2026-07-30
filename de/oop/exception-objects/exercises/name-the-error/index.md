---
title: Übung ’Nennen Sie den Fehler‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Schreiben Sie eine Subroutine `risky`, die `die 'sub failed'` ausführt. Rufen Sie sie dann aus einem Block mit einem `CATCH`-Phaser auf. Das `CATCH` soll den Typnamen der Ausnahme (mit `.^name`) und danach ihre Meldung (mit `.message`) ausgeben. Das zeigt, dass `CATCH` Ausnahmen behandelt, die von Code geworfen werden, den der Block *aufruft*, und nicht nur von einem direkt im Block stehenden `die`.

## Beispiel

Das Programm gibt aus:

```
X::AdHoc
sub failed
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
