---
title: Kvizo — Promesoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` plenumas la blokon fone kaj redonas promeson. `await` atendas ĝin kaj redonas la rezulton de la bloko, `100 / 4`, kiu estas `25`.

</div>

{% include nav.html %}
