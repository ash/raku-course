---
title: Lambdas
translations_gpt:
---

{% include menu.html %}

Ein _Lambda_ ist eine Funktion ohne Namen. Zwei Schreibweisen dafür kennen Sie bereits. Die erste ist der **[Pointy Block](/de/advanced/anonymous-subroutines)**, der seine Parameter hinter dem Pfeil `->` aufführt:

```raku
my &square = -> $x { $x * $x };
say square(7); # 49
```

Die zweite ist die **[Whatever](/de/advanced/whatever)**-Form, in der ein `*` für das Argument steht und der Ausdruck darum herum zu einer einstelligen Funktion wird:

```raku
my &square = * ** 2;
say square(7); # 49
```

Beide erzeugen dieselbe Art Ding: ein Stück Code, das Sie ablegen, weitergeben und aufrufen können. Lambdas glänzen als Argumente für Funktionen höherer Ordnung, wo ein Name nur im Weg wäre:

```raku
say (1..5).map(-> $n { $n * $n }); # (1 4 9 16 25)
say (1..5).map(* ** 2);            # (1 4 9 16 25)
```

Die Pointy-Form ist klarer, wenn der Rumpf länger ist oder mehrere Parameter hat; die Whatever-Form ist für einfache Ausdrücke herrlich kurz. Es sind zwei Schreibweisen desselben Gedankens: eine Funktion ohne Namen.

{% include nav.html %}
