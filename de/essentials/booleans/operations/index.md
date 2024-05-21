---
title: Boolesche Operationen
---

{% include menu.html %}

Sie können alle Standardoperationen mit Booleschen Werten durchführen: Boolesches UND, ODER und exklusives ODER (oder XOR):

```raku
say False && True; # UND
say False || True; # ODER
say False ^^ True; # XOR
```

Dieses Programm gibt die folgenden Ergebnisse aus:

    False
    True
    True

## Negation

Um einen Booleschen Wert zu negieren, verwenden Sie den Präfixoperator `!`:

```raku
say !False; # True
```

Boolesche Werte können in skalaren Variablen gespeichert werden:

```raku
my $did = True;
my $didn't = !$did;
```

{% include nav.html %}