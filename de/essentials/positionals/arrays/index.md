---
title: Arrays
---

{% include menu.html %}

Arrays sind aggregierte Datentypen, die mehr als einen Wert enthalten können. Das unterscheidet Arrays von [skalaren Elementen](/de/essentials/scalar-variables). Array-Elemente können indiziert (oder _subskriptiert_) werden. Mit anderen Worten, ihre Elemente haben eine Position (was den allgemeinen Namen für diese Art von Daten erklärt: Positionale).

Array-Variablen verwenden eine andere Art von Sigil: `@`. Die Regeln für den Variablennamen sind die gleichen wie [für Skalare](/de/essentials/scalar-variables/identifiers/).

```raku
my @cities;
```

Bisher wurde das Array namens `@cities` erstellt. Sie können es mit einigen Werten füllen:

```raku
@cities = 'Paris', 'Rom', 'Berlin';
```

Alternativ ist es möglich, die Werte sofort zu initialisieren:

```raku
my @cities = 'Paris', 'Rom', 'Berlin';
```

## Indizierung

Um auf ein einzelnes Element eines Arrays zuzugreifen, verwenden Sie ein Paar Klammern, die Sie nach dem Namen der Variablen setzen:

```raku
say @cities[1];
```

Beachten Sie, dass das Sigil immer gleich bleibt. Da die Elemente von null an gezählt werden, ist das Element `@cities[1]` in unserem Beispiel `'Rom'`.

Arrays sind veränderbar, sodass Sie die Elemente leicht ändern können, indem Sie ihnen einfach einen neuen Wert zuweisen:

```raku
@cities[0] = 'Rom';
@cities[1] = 'Paris';
```

Danach wird die Anweisung `say @cities[1]` den neuen Wert `'Paris'` ausgeben.

## Größe

Um die aktuelle Länge eines Arrays zu erhalten, oder mit anderen Worten, die Anzahl seiner Elemente, verwenden Sie die Methode `elems`:

```raku
say @cities.elems; # 3
```

Wenn das Array in einem Kontext erscheint, in dem der erwartete Parameter eine Zahl ist, ist der Rückgabewert die Größe des Arrays:

```raku
say +@cities; # 3
```

Hier erfordert der [`+` Präfix-Operator](/de/essentials/coercion/prefixes) einen numerischen Wert von seinem Argument, sodass das Ergebnis von `+@cities` `3` ist.

{% include nav.html %}