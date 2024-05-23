---
title: Skalaraj variabloj
---

{% include menu.html %}

Variabloj devas esti anoncitaj antaŭ ol vi uzas ilin. Raku havas specialajn _deklarilojn_ por tio. Por deklari variablon, uzu `my` kiel montrite sube:

```raku
my $name;
```

Dirite, vi enkondukis novan variablon, kiu ankoraŭ ne enhavas iun ajn ŝarĝon. Sed ĝi jam estas konata al la kompililo por identigi ĝin kiam ĝi vidas la saman nomon poste en la programo.

## Pli ol unu variablo

Vi povas deklari du aŭ pli da variabloj uzante la saman `my` deklarilon:

```raku
my ($x, $y);
```

{% include nav.html %}