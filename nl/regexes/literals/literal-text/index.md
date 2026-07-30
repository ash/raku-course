---
title: Letterlijke tekst matchen
translations_gpt:
---

{% include menu.html %}

Het eenvoudigste patroon is een reeks letters en cijfers. Zo'n patroon matcht precies die tekens, in die volgorde, ergens in de string:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
say 'Hello'       ~~ /ell/; # ｢ell｣
```

De match hoeft niet aan het begin van de string te beginnen — de regex-engine zoekt het patroon op elke positie tot ze het vindt.

Een geslaagde match levert een `Match`-object op. Die `｢cat｣` in het eerste voorbeeld is hoe zo'n object eruitziet wanneer het afgedrukt wordt: `say` toont een `Match` als de tekst die hij matchte, omgeven door de hoekhaken `｢ ｣`. Als het patroon niet aanwezig is, mislukt de match: de smartmatch levert `Nil` op, een ongedefinieerde waarde die in een booleaanse test als onwaar telt:

```raku
say ('the cat sat' ~~ /dog/);       # Nil
say ('the cat sat' ~~ /dog/).Bool;  # False
```

Binnen een regex zijn spaties standaard **niet** betekenisvol — ze staan er alleen om het patroon leesbaar te maken. Dus `/ ell /` matcht precies wat `/ell/` zou matchen; de omringende spaties worden eenvoudigweg genegeerd:

```raku
say 'Hello' ~~ / ell /; # ｢ell｣
```

Omdat een spatie in het patroon genegeerd wordt, heb je voor het matchen van een *echte* spatie **aanhalingstekens** nodig: alles wat je tussen aanhalingstekens zet wordt letterlijk gematcht. Datzelfde aanhalen is ook hoe je een leesteken matcht dat anders een bijzondere betekenis in een regex zou hebben:

```raku
say 'a b'       ~~ / 'a b' /; # ｢a b｣
say 'price: $5' ~~ / '$' /;   # ｢$｣
```

(Voor witruimte kun je ook de klasse `\s` gebruiken, die je zo tegenkomt.)

{% include nav.html %}
