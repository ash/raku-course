---
title: Der Whatever-Stern
translations_gpt:
---

{% include menu.html %}

Du hast vielleicht schon das `*` in Ausdrücken wie `* * 2` oder `* %% 2` gesehen, wenn du `map` und `grep` aufrufst. Dieses `*` ist der _Whatever-Stern_, und der Ausdruck drumherum baut im Handumdrehen eine kleine Funktion mit einem Argument. Dieser Abschnitt erklärt, was er wirklich ist, wie er sich zu einem Block verhält und wo der bloße Stern einfach „was auch immer du willst" bedeutet.

## Ein Stern erzeugt eine Funktion

Wenn `*` in einem Ausdruck vorkommt, verwandelt Raku den gesamten Ausdruck in eine Funktion — einen `WhateverCode` —, wobei der Stern für das Argument steht:

```raku
my $double = * * 2;

say $double.^name; # WhateverCode
say $double(21);   # 42
```

`* * 2` ist eine Funktion, die ihr einziges Argument mit zwei multipliziert. Deshalb funktioniert `(1..5).map(* * 2)`: `map` erhält genau eine solche Funktion mit einem Argument.

## Whatever versus Block

Ein Whatever-Ausdruck ist eine kürzere Schreibweise für eine Funktion, die du auch als Block schreiben könntest. Diese drei sind gleichwertig:

```raku
* * 2
{ $_ * 2 }
-> $x { $x * 2 }
```

Die Whatever-Form benennt keinen Parameter; die Block-Form verwendet die Topic-Variable `$_`; die Pfeil-Form benennt `$x`. Diese letzte, `-> $x { ... }`, ist selbst eine kleine Funktion — du wirst sie in [Anonyme Subroutinen](/de/advanced/anonymous-subroutines) richtig kennenlernen; hier genügt es, sie als dritte Möglichkeit zu lesen, dieselbe Funktion mit einem Argument zu formulieren. Für einen einfachen Ausdruck ist der Stern die kompakteste Variante, weshalb er bei `map`, `grep` und `sort` so häufig vorkommt:

```raku
say (1..5).map(* * 2);            # (2 4 6 8 10)
say (1..5).map({ $_ * 2 });       # (2 4 6 8 10)
say (1..5).map(-> $x { $x * 2 }); # (2 4 6 8 10)
```

Greife zum **Block**, wenn die Logik mehr als einen Ausdruck braucht oder ein benannter Parameter die Sache klarer macht. Greife zum **Stern**, wenn ein kurzer Ausdruck alles sagt.

## Mehr als ein Stern

Jedes `*` im Ausdruck ist ein eigenes Argument, der Reihe nach. Zwei Sterne ergeben also eine Funktion mit **zwei** Argumenten:

```raku
my $add = * + *;

say $add(3, 4); # 7
```

Hier ist `* + *` eine Funktion mit zwei Argumenten, die ihre Argumente addiert — zum Beispiel eine laufende Summe und das nächste Element.

## Der bloße Whatever

Alleinstehend bedeutet `*` „was auch immer" — so viel wie vorhanden, oder ohne Begrenzung. Zwei alltägliche Verwendungen:

```raku
my @a = 10, 20, 30;
say @a[*-1];        # 30  — * ist die Array-Länge, also ist *-1 der letzte Index

say (1..*).head(3); # (1 2 3)  — 1..* ist ein offener Bereich
```

In `@a[*-1]` steht der Stern für die Anzahl der Elemente, und in `1..*` steht er für „keine Obergrenze". Ob er eine Funktion erzeugt oder „was auch immer du willst" bedeutet — der Stern ist eine der nützlichsten Kurzschreibweisen in Raku.

{% include nav.html %}
