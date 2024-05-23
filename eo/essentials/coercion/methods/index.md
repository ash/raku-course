---
title: Konvertado de tipoj uzante metodojn de tipa devigo
---

{% include menu.html %}

Por konverti, aŭ _devigi_ tipon, voku metodon kun la nomo de la datumtipo. Ekzemple, konvertu ŝnuron en entjeran numeron:

```raku
my $howmany = '42';
my $n = $howmany.Int;
say $n;
```

En multaj kazoj, vi ne bezonas konverti valorojn eksplicite, ĉar Raku faras tion por vi. La sekva kodo funkcias ĝuste kaj antaŭvideble:

```raku
my $a = '10';
my $b = '20';
my $c = $a + $b;
say "La rezulto estas $c."; # La rezulto estas 30.
```

La du variabloj, `$a` kaj `$b`, enhavas ŝnurojn, sed ili estas uzataj en aritmetika esprimo kun `+`. Ĉi-momente, ambaŭ ŝnuroj estas konvertitaj al entjeroj, kaj tiel `$c` ankaŭ ricevas entjeron. Variablo enhavanta entjeron estas interpolita en ŝnuron en la lasta linio, kie Raku faras la necesajn operaciojn por prezenti la numeron kiel sekvon de ciferoj-karakteroj.

{% include nav.html %}