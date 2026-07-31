---
title: Listoj
translations_gpt:
---

{% include menu.html %}

Listo ankaŭ estas ordigita kolekto de valoroj, sed, malsame ol tabelo, ĝi estas _neŝanĝebla_: vi ne povas ŝanĝi, aldoni aŭ forigi ĝiajn elementojn. Listo estas skribata kiel komo-apartigita sekvenco de valoroj, ofte metita ene de krampoj:

```raku
my $colours = ('red', 'green', 'blue');
```

Vi povas legi la elementojn de listo laŭ ilia indekso, kaj demandi, kiom da ili estas, ĝuste kiel ĉe tabelo:

```raku
my $colours = ('red', 'green', 'blue');
say $colours[0];    # red
say $colours.elems; # 3
```

La diferenco montriĝas, kiam vi provas ŝanĝi elementon. Ĉe tabelo ĝi funkcias, ĉar ĉiu elemento estas ujo:

```raku
my @array = 1, 2, 3;
@array[0] = 10;
say @array; # [10 2 3]
```

Ĉe listo tio estas eraro, ĉar la elementoj de listo estas nudaj valoroj, ne ujoj:

```raku
my $list = (1, 2, 3);
$list[0] = 10;
```

La dua programo haltas kun mesaĝo:

```
Cannot modify an immutable List ((1 2 3))
  in block <unit> at t.raku line 2
```

Do uzu tabelon (la sigelo `@`), kiam vi bezonas ŝanĝi la enhavon, kaj liston, kiam vi bezonas nur konservi fiksitan sekvencon de valoroj.

{% include nav.html %}
