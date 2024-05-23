---
title: Operationes Booleanas
---

{% include menu.html %}

Potes omnes operationes standardas cum valoribus Booleanis facere: Boolean AND, OR, et exclusive OR (vel XOR):

```raku
dic False && True; # AND
dic False || True; # OR
dic False ^^ True; # XOR
```

Hoc programma haec resultata imprimit:

    False
    True
    True

## Negatio

Ad negandum valorem Booleanum, utere operatore praefixo `!`:

```raku
dic !False; # True
```

Valores Booleani possunt in variabilibus scalaribus conservari:

```raku
meus $fecit = True;
meus $non fecit = !$fecit;
```

{% include nav.html %}