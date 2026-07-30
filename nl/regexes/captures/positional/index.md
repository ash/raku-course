---
title: Positionele captures
translations_gpt:
---

{% include menu.html %}

Zet een deel van het patroon tussen ronde haken `( )` om het te _capturen_. Na een geslaagde match is elk gecapturd stuk beschikbaar als `$0`, `$1`, enzovoort, genummerd vanaf nul in de volgorde waarin de haken openen:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $0; # ｢2025｣
    say $1; # ｢06｣
}
```

Het eerste haakjespaar captureerde het jaar in `$0`, het tweede captureerde de maand in `$1`. De tekst ertussen — de letterlijke `-` — wordt gematcht maar niet gecapturd.

Elke capture is zelf een klein matchobject, dus je kunt hem om zijn `.Str`, zijn positie enzovoort vragen. In een string met dubbele aanhalingstekens interpoleert een capture als zijn gematchte tekst:

```raku
if 'hello world' ~~ / (\w+) ' ' (\w+) / {
    say "$1 $0"; # world hello
}
```

Hier worden de twee gecapturde woorden in omgekeerde volgorde afgedrukt, wat ze verwisselt.

De captures worden ook in de matchvariabele `$/` bewaard, en `$0` is eigenlijk een korte manier om `$/[0]` te schrijven. Je kunt rechtstreeks via `$/` werken:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $/[0];    # ｢2025｣
    say $/[1];    # ｢06｣
    say $/.elems; # 2
}
```

`$/` is het hele matchobject, het indexeren bereikt de positionele captures, en `.elems` vertelt je hoeveel er zijn.

{% include nav.html %}
