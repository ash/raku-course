---
title: Kvizo — Fermi kanalon
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.close;
say $c.list.elems;
```

{:.quiz}
0 | 0
0 | 1
1 | 2
0 | ĝi atendas eterne

{% include quiz.html %}

<div class="extended-explanation">

`.list` kolektas ĉiun valoron ankoraŭ en la kanalo kaj finiĝas, ĉar la kanalo estas fermita. Du valoroj estis senditaj, do `.elems` estas `2`. Sen la `.close`, `.list` atendus eterne.

</div>

{% include nav.html %}
