---
title: Übung ’Ein Fehler bei negativen Zahlen‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Definieren Sie eine eigene Ausnahmeklasse `Negative`, die von `Exception` erbt, ein Attribut `n` hat und deren Methode `message` `<n> is negative` liefert.

Schreiben Sie eine Subroutine `check($n)`, die eine `Negative` wirft (mit diesem `n`), wenn ihr Argument kleiner als null ist, und andernfalls das Argument liefert. Rufen Sie dann in einem Block `check(-5)` auf und verwenden Sie einen `CATCH`-Phaser mit `when Negative`, um die Meldung der Ausnahme auszugeben.

Werfen Sie schließlich nach dem Block eine weitere `Negative` (mit `n` gleich `-10`), um zu zeigen, dass eine Ausnahme, die dort geworfen wird, wo kein `CATCH` sie bewacht, das Programm beendet.

## Beispiel

Das Programm gibt aus:

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
