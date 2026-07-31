---
title: Ĝenerala kongruigo
translations_gpt:
---

{% include menu.html %}

Defaŭlte, regulesprimo trovas nur la **unuan** kongruon. La adverbo `:g` (mallongigo de `:global`) trovas **ĉiun** kongruon en la ĉeno. Ĝi estas skribata sur la operatoro `m///`:

```raku
my @all = 'a1b2c3' ~~ m:g/\d/;
say @all;       # [｢1｣ ｢2｣ ｢3｣]
say @all.elems; # 3
```

Kun `:g`, la rezulto kondutas kiel listo de kongruaj objektoj — unu por ĉiu loko, kie la ŝablono estis trovita. Vi povas kalkuli ilin, iri tra ili, aŭ transformi ĉiun en ĉenon:

```raku
my @numbers = 'a12 b3 c456' ~~ m:g/\d+/;
say @numbers.map(*.Str).join(', '); # 12, 3, 456
```

Ĉi tie `\d+` kongruis kun tri apartaj serioj de ciferoj, kaj `:g` kolektis ĉiujn el ili.

Ĝenerala kongruigo estas la natura ilo, kiam ajn la demando estas «kiom da …» aŭ «ĉiuj el la …» anstataŭ «ĉu estas …».

{% include nav.html %}
