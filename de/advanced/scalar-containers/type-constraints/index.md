---
title: Typbeschränkungen
---

{% include menu.html %}

Im [Grundlagenteil](/de/essentials/typed-variables/type-constraints/) hast du gesehen, wie man den Typ einer Variable mit einer Typeinschränkung festlegt. Es ist wichtig zu betonen, dass es der _Container_ ist, der diese Einschränkung für die Werte durchsetzt, die er akzeptieren darf.

Die folgende Deklaration erstellt einen Skalar-Container, der nur Ganzzahlen aufnehmen kann:

```raku
my Int $int;
```

Ein typisierter Container akzeptiert nur Werte, die zu seinem Typ passen, sodass alle folgenden Zuweisungen gültig sind:

```raku
my Int $int;

$int = 123;       # directly an integer
say $int;

$int = 100 + 23;  # the result is an integer
say $int;

$int = '123'.Int; # a string converted to an integer
say $int;
```

Raku führt in diesem Fall keine automatische Typumwandlung durch. Die Zuweisung einer Fließkommazahl (die in Raku ein `Rat`-Wert ist) ist daher nicht erlaubt:

```raku
my Int $int;
$int = 123.45;
```

Du bekommst bereits zur Kompilierzeit einen Fehler:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

Um den Fehler zu vermeiden, konvertiere den Wert explizit:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Lass dich nicht von den zwei Punkten in `123.45.Int` verwirren. Der erste ist der Dezimalpunkt; der zweite ruft die `Int`-Methode auf dem rationalen (`Rat`) Wert auf.

{% include nav.html %}
