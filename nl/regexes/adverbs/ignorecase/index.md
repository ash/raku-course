---
title: Matchen zonder op hoofdletters te letten
translations_gpt:
---

{% include menu.html %}

Normaal onderscheidt een regex hoofdletters van kleine letters: `/hello/` matcht `HELLO` niet. Het bijwoord `:i` (kort voor `:ignorecase`) zet dat onderscheid uit:

```raku
say 'HELLO' ~~ /:i hello/; # ｢HELLO｣
```

Met `:i` matchen de letters ongeacht hoofdletter of kleine letter, dus matcht het patroon in kleine letters de tekst in hoofdletters. Het werkt in beide richtingen en ook voor gemengd hoofdlettergebruik:

```raku
say 'I use RAKU' ~~ /:i raku/; # ｢RAKU｣
```

Je kunt het bijwoord ook op de operator `m///` schrijven in plaats van binnen het patroon:

```raku
say 'HELLO' ~~ m:i/hello/; # ｢HELLO｣
```

Beide laten het **hele** patroon hoofdletters negeren. De [volgende pagina](/nl/regexes/adverbs/adverb-scope) kijkt nauwkeuriger naar *waar* een bijwoord van toepassing is — het verschil tussen de twee plaatsingen — en hoe je hoofdlettergevoeligheid voor een deel van een patroon weer aanzet.

{% include nav.html %}
