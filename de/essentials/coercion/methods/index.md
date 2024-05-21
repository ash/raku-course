---
title: Konvertieren von Typen mit Typumwandlungsmethoden
---

{% include menu.html %}

Um einen Typ zu konvertieren oder zu _erzwingen_, rufen Sie eine Methode mit dem Namen des Datentyps auf. Zum Beispiel, um einen String in eine ganze Zahl zu konvertieren:

```raku
my $howmany = '42';
my $n = $howmany.Int;
say $n;
```

In vielen Fällen müssen Sie Werte nicht explizit konvertieren, da Raku diese Aufgabe für Sie übernimmt. Der folgende Code funktioniert korrekt und vorhersehbar:

```raku
my $a = '10';
my $b = '20';
my $c = $a + $b;
say "Das Ergebnis ist $c."; # Das Ergebnis ist 30.
```

Die beiden Variablen, `$a` und `$b`, enthalten Strings, aber sie werden in einem arithmetischen Ausdruck mit `+` verwendet. An diesem Punkt werden beide Strings in ganze Zahlen umgewandelt, und somit erhält `$c` auch eine ganze Zahl. Eine Variable, die eine ganze Zahl enthält, wird in der letzten Zeile in einen String interpoliert, wobei Raku die notwendigen Operationen durchführt, um die Zahl als eine Folge von Ziffernzeichen darzustellen.

{% include nav.html %}