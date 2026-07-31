---
title: Kvizo — La retrodirekta fluo
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my @out <== map(* + 1) <== (10, 20, 30);
say @out;
```

{:.quiz}
1 | [11 21 31]
0 | [31 21 11]
0 | [30 20 10]
0 | [10 20 30]

{% include quiz.html %}

<div class="extended-explanation">

`<==` ŝanĝas nur la direkton, en kiu la ĉenstacio estas skribita, ne la ordon de la datumoj. La fonto `(10, 20, 30)` enfluas — celo maldekstre — kaj `map(* + 1)` aldonas unu al ĉiu elemento surloke, donante `[11 21 31]`. Retrodirekta fluo neniam inversigas la elementojn; por tio vi bezonus eksplicitan `reverse`.

</div>

{% include nav.html %}
