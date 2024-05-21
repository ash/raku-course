---
title: Paare
---

{% include menu.html %}

Ein Paar ist eine Datenstruktur, die einen Namen und einen Wert speichert. Sie bilden ein festes Objekt, das in einer skalaren Variablen gespeichert werden kann. Hier ist ein Beispiel, wie man ein Paar erstellt:

```raku
my $pair = name => 'Anna';
```

Der Typ der Variablen `$pair` ist `Pair`:

```raku
say $pair.WHAT; # (Pair)
```

Es ist möglich, den Namen und den Wert separat zuzugreifen, indem man die entsprechenden Methoden `key` und `value` verwendet:

```raku
say $pair.key; # name
say $pair.value; # Anna
```

Ein wichtiges Merkmal von Paaren ist, dass sie unveränderliche Objekte sind. Das bedeutet, dass man einem bestehenden Paar keinen neuen Wert zuweisen oder einen neuen Namen geben kann. Aber man kann natürlich ein komplett neues Paar derselben Variablen zuweisen:

```raku
my $pair = name => 'Anna';
$pair = name => 'John';
say $pair.value; # John
```

## Indizierung

Es gibt eine weitere Methode, den Wert eines Paares zu lesen. Man kann es mit dem Namen seines Schlüssels in spitzen Klammern indizieren. So macht man das:

```raku
say $pair<name>;
```

Beachten Sie, dass es nicht notwendig ist, den Namen des Schlüssels zu zitieren, wenn er keine Leerzeichen enthält. Wenn doch, werden die Dinge etwas strenger:

```raku
my $pair = 'employee name' => 'Julie Madelon';
say $pair{'employee name'};
```

Beachten Sie, dass diesmal geschweifte Klammern verwendet werden.

{% include nav.html %}