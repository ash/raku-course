---
title: Operacioj kun booleaj valoroj
---

{% include menu.html %}

Vi povas fari ĉiujn normajn operaciojn kun booleaj valoroj: Boolea KAJ, AŬ, kaj ekskluziva AŬ (aŭ XOR):

```raku
say False && True; # KAJ
say False || True; # AŬ
say False ^^ True; # XOR
```

Ĉi tiu programo presas la jenajn rezultojn:

    False
    True
    True

## Negacio

Por nei boolea valoron, uzu la prefikso-operaciilon `!`:

```raku
say !False; # True
```

Booleaj valoroj povas esti stokitaj en skalaj variabloj:

```raku
my $did = True;
my $didn't = !$did;
```

{% include nav.html %}