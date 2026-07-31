---
title: Sekvencaj ŝablonoj
translations_gpt:
---

{% include menu.html %}

La operatoro `...` rekonas pli ol nur aritmetikajn paŝojn.

Se vi donas al ĝi tri valorojn, kiuj kreskas per multipliko, ĝi daŭrigas per _geometria_ sekvenco:

```raku
say 1, 2, 4 ... 64; # (1 2 4 8 16 32 64)
```

Ĉi tie ĉiu valoro estas duoblo de la antaŭa, do la sekvenco duobliĝas ĝis ĝi atingas `64`.

Sekvencoj ne limiĝas al nombroj. Kun ĉenoj, Raku sekvas la naturan alfabetan ordon:

```raku
say 'a' ... 'e'; # (a b c d e)
```

Sekvenco ankaŭ povas nombri malsupren. Kiam la fina punkto estas pli malgranda ol la komenco, la valoroj malkreskas:

```raku
say 10 ... 1; # (10 9 8 7 6 5 4 3 2 1)
```

En ĉiu kazo vi priskribas la ŝablonon per ekzemplo, kaj la operatoro `...` plenigas la ceteron.

{% include nav.html %}
