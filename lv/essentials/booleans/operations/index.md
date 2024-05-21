---
title: Būla operācijas
---

{% include menu.html %}

Jūs varat veikt visas standarta operācijas ar Būla vērtībām: Būla UN, VAI un ekskluzīvo VAI (vai XOR):

```raku
say False && True; # UN
say False || True; # VAI
say False ^^ True; # XOR
```

Šī programma izdrukā šādus rezultātus:

    False
    True
    True

## Negācija

Lai noliegtu Būla vērtību, izmantojiet prefiksa operatoru `!`:

```raku
say !False; # True
```

Būla vērtības var glabāt skalāru mainīgajos:

```raku
my $did = True;
my $didn't = !$did;
```

{% include nav.html %}