---
title: Zeichenfolgen-Arrays zitieren
---

{% include menu.html %}

Für Zeichenfolgen-Arrays, bei denen die Elemente kurze Zeichenfolgen ohne Leerzeichen sind, bietet Raku eine schöne Syntax zum Initialisieren.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Es liegt an Ihnen zu entscheiden, ob Sie zusätzliche Leerzeichen um die spitzen Klammern hinzufügen oder nicht. Der Compiler akzeptiert beide Optionen.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Beide Konstruktionen sind gleichwertig zu einer einfachen Variante:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Array vs Liste

Beachten Sie, dass in den obigen Beispielen die Anführungszeichen `< . . . >` eine `List` und kein `Array` erstellen. Sie können dies bestätigen, indem Sie die Methode `WHAT` aufrufen:

```raku
say <a b c>.WHAT; # (List)
```

Wenn Sie es jedoch einem Array zuweisen, erhalten Sie ein Array mit den Elementen aus der Liste.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}