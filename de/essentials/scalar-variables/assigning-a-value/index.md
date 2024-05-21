---
title: Zuweisung eines Wertes
---

{% include menu.html %}

Verwenden Sie den `=` Operator, um einen neuen Wert in einen skalaren Container zu setzen.

```raku
my $name;
$name = 'Anna';
```

Sie können die Variable nun verwenden und zum Beispiel ausgeben:

```raku
say $name;
```

## Mehrfache Zuweisungen

Mehrere Variablen können gleichzeitig zugewiesen werden. Zum Beispiel so können zwei Skalare in einer einzigen Anweisung zugewiesen werden:

```raku
my ($a, $b);
($a, $b) = 10, 20;
```

Beachten Sie, dass Sie die Klammern auf der linken Seite nicht weglassen können. Aber Sie können sie zur Symmetrie auf der rechten Seite hinzufügen:

```raku
($a, $b) = (10, 20);
```

{% include nav.html %}