---
title: Kvizo — Nomitaj regulesprimoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my regex letter { <[a..z]> }

'a1' ~~ / <letter> /;
say $<letter>;
```

{:.quiz}
1 | ｢a｣
0 | ｢1｣
0 | ｢a1｣
0 | ｢letter｣

{% include quiz.html %}

<div class="extended-explanation">

Voki nomitan regulesprimon kiel `<letter>` kaj kongruas kun ĝi kaj kaptas la rezulton sub tiu nomo. La ŝablono trovas la unuan minusklon, `a`, do `$<letter>` estas `｢a｣`.

</div>

{% include nav.html %}
