---
title: Subroutinen zurückgeben
translations_gpt:
---

{% include menu.html %}

Eine Subroutine kann auch eine Subroutine **zurückgeben**. Damit bauen Sie im laufenden Betrieb neue Funktionen, zugeschnitten auf die Argumente, die Sie mitgeben:

```raku
sub adder($n) {
    sub ($x) { $x + $n };
}

my &add5 = adder(5);
say add5(3); # 8
```

`adder(5)` baut eine anonyme Subroutine, die `5` zu ihrem Argument addiert, und liefert sie zurück. Wir legen sie in `&add5` ab und rufen sie wie jede andere Subroutine auf. `adder(10)` aufzurufen ergäbe einen anderen Addierer, der zehn addiert.

Beachten Sie, dass sich die zurückgegebene Subroutine den Wert von `$n` aus dem Aufruf merkt, der sie erzeugt hat — `add5` behält seine `5` auch dann, wenn `adder` längst fertig ist. Eine Subroutine, die Werte aus dem Bereich einfängt, in dem sie erzeugt wurde, heißt [_Closure_](/de/paradigms/closures), das Thema des nächsten Abschnitts.

Funktionen zurückzugeben ist ein knapper Weg, ganze Familien verwandter Operationen zu erzeugen, ohne sich zu wiederholen: Eine `adder`-Definition liefert unbegrenzt viele bestimmte Addierer.

{% include nav.html %}
