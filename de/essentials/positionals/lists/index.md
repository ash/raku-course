---
title: Listen
---

{% include menu.html %}

Listen sind ähnlich wie Arrays, aber sie sind unveränderlich. Es ist nicht möglich, die Größe oder die Elemente einer Liste zu ändern. Verwenden Sie Klammern, um eine Liste zu erstellen:

```raku
my $odd = (1, 3, 5, 7, 9);
```

## Indizierung von Listen

Um auf einzelne Elemente einer Liste zuzugreifen, verwenden Sie eckige Klammern mit dem Index:

```raku
say $odd[3]; # 7
```

Es ist jedoch nicht möglich, einen neuen Wert zu setzen:

```raku
$odd[3] = 8; # Nicht OK
```

Ein solcher Versuch führt zu einer Ausnahme:

    Cannot modify an immutable List ((1 3 5 7 9))
      in block <unit> at t.raku line 4

## Zuweisung einer Liste zu einem Array

Was passiert, wenn Sie eine Liste in einer Variablen mit dem `@`-Sigil speichern?

```raku
my @data = (40, 42, 44);
```

In diesem Fall enthält die Variable `@data` ein Array, und Sie können dessen Elemente ändern.

%%tipblock
## Variable vs Liste

Beachten Sie, dass die Tatsache, dass Listen unveränderlich sind, nicht bedeutet, dass Sie die Variable, die sie enthält, nicht wiederverwenden können.

```raku
my $elements = (1, 2);
say $elements[0]; # 1

$elements = (3, 4);
say $elements[0]; # 3
```

%%/tipblock

{% include nav.html %}