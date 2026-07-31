---
title: Fermi kanalon
translations_gpt:
---

{% include menu.html %}

Kiam produktanto havas neniujn pliajn valorojn por sendi, ĝi vokas `.close` sur la kanalo. Fermo signalas al la konsumanto, ke la fluo finiĝis.

La plej oportuna maniero konsumi fermitan kanalon estas `.list`, kiu donas al vi ĉiun restantan valoron kaj finiĝas tuj kiam la kanalo estas fermita:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.send(3);
$c.close;

say $c.list; # (1 2 3)
```

Ĉar `.list` atendas, ke la kanalo estu fermita, ĝi estas perfekta por «kolektu ĉion, kion la produktanto sendas». Vi povas trakti la rezulton kiel ajnan alian liston — sumi ĝin, nombri ĝin kaj tiel plu:

```raku
my $c = Channel.new;
$c.send($_) for 1..5;
$c.close;

say [+] $c.list; # 15
```

Fermo estas la maniero, laŭ kiu konsumanto scias, kiam halti. Sen ĝi, `.list` (aŭ buklo de `.receive`) atendus eterne valoron, kiu neniam venas. Ĉiam fermu kanalon, kiam la sendado estas finita.

{% include nav.html %}
