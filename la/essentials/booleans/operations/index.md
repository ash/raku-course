---
title: Booleana operationes
---

{% include menu.html %}

Potes omnes operationes standardas cum valoribus Booleanis facere: Boolean AND, OR, et exclusive OR (vel XOR):

```raku
say False && True; # AND
say False || True; # OR
say False ^^ True; # XOR
```

Hoc programma haec resultata imprimit:

    False
    True
    True

## Negatio

Ad negandum valorem Booleanum, utere operatore praefixo `!`:

```raku
say !False; # True
```

Valores Booleani possunt in variabilibus scalaribus conservari:

```raku
my $fecit = True;
my $non fecit = !$fecit;
```

{% include nav.html %}