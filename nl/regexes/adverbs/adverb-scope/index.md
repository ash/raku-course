---
title: Bereik van een bijwoord
translations_gpt:
---

{% include menu.html %}

Het bijwoord `:i` kan op twee plaatsen geschreven worden, en het verschil zit in **waar het effect heeft**. Op de operator maakt `m:i/…/` het **hele** patroon hoofdletterongevoelig. Binnen de regex geschreven is `:i` _positioneel_ — het geldt alleen vanaf het punt waar het staat. Zo kun je de hoofdletterregel voor slechts een deel van een patroon versoepelen:

```raku
say 'RAKU' ~~ /R :i aku/; # ｢RAKU｣
say 'raku' ~~ /R :i aku/; # Nil
```

Hier wordt de voorafgaande `R` nog steeds hoofdlettergevoelig gematcht — dus `raku` in kleine letters mislukt — terwijl `:i` alleen de daaropvolgende `aku` hoofdletterongevoelig maakt. Bij `m:i/Raku/` is daarentegen elke letter hoofdletterongevoelig, dus matchen zowel `RAKU` als `raku`.

## Beperkt tot een groep

Het effect van een intern bijwoord is ook beperkt tot zijn omvattende groep. In `/[:i abc]def/` negeert alleen `abc` hoofdletters; de `def` achter de groep wordt strikt gematcht:

```raku
say 'ABCdef' ~~ /[:i abc]def/; # ｢ABCdef｣
say 'ABCDEF' ~~ /[:i abc]def/; # Nil
```

## Een bijwoord uitzetten

Om een bijwoord halverwege een patroon weer uit te zetten, negeer je het met een `!`. Dus `:!i` herstelt de hoofdlettergevoeligheid vanaf dat punt:

```raku
say 'ABCdef' ~~ / :i abc :!i def /; # ｢ABCdef｣
say 'ABCDEF' ~~ / :i abc :!i def /; # Nil
```

`:i` versoepelt de hoofdletterregel voor `abc`, waarna `:!i` hem terugzet zodat `def` exact moet matchen. Groeperen en `:!i` zijn twee manieren om hetzelfde doel te bereiken: een bijwoord beperken tot precies het deel van het patroon dat het nodig heeft. Dezelfde aan/uit-schakelaar werkt ook voor de andere bijwoorden binnen een patroon.

{% include nav.html %}
