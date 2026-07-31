---
title: Poziciaj kaptoj
translations_gpt:
---

{% include menu.html %}

Metu parton de la ŝablono en rondajn krampojn `( )` por _kapti_ ĝin. Post sukcesa kongruo, ĉiu kaptita peco disponeblas kiel `$0`, `$1` kaj tiel plu, numerita ekde nulo laŭ la ordo, en kiu la krampoj malfermiĝas:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $0; # ｢2025｣
    say $1; # ｢06｣
}
```

La unua paro de krampoj kaptis la jaron en `$0`, la dua kaptis la monaton en `$1`. La teksto inter ili — la laŭlitera `-` — estas kongruita sed ne kaptita.

Ĉiu kapto estas mem malgranda kongrua objekto, do vi povas peti al ĝi sian `.Str`, sian pozicion kaj tiel plu. En ĉeno kun duoblaj citiloj kapto interpoliĝas kiel sia kongruinta teksto:

```raku
if 'hello world' ~~ / (\w+) ' ' (\w+) / {
    say "$1 $0"; # world hello
}
```

Ĉi tie la du kaptitaj vortoj estas presataj en la mala ordo, kio interŝanĝas ilin.

La kaptoj estas ankaŭ konservataj en la kongrua variablo `$/`, kaj `$0` efektive estas mallonga maniero skribi `$/[0]`. Vi povas labori tra `$/` rekte:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $/[0];    # ｢2025｣
    say $/[1];    # ｢06｣
    say $/.elems; # 2
}
```

`$/` estas la tuta kongrua objekto, indeksi ĝin atingas la poziciajn kaptojn, kaj `.elems` diras al vi, kiom da ili estas.

{% include nav.html %}
