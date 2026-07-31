---
title: Kvizo — Kuntekstoj
---

{% include menu.html %}

Kion presas la sekva programo?

```raku
my @a = 10, 20, 30;
say +@a;
```

{:.quiz}
0 | 60
1 | 3
0 | 10
0 | 10 20 30

{% include quiz.html %}

<div class="extended-explanation">

La prefikso `+` trudas nombran kuntekston. Por tabelo, la nombra valoro estas ĝia nombro da elementoj, do `+@a` estas `3`, ne la sumo. Uzu `~` por ĉena kunteksto (`10 20 30`) aŭ `[+]` por efektive aldoni la elementojn.

</div>

{% include nav.html %}
