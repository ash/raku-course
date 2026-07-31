---
title: Sendi kaj ricevi
translations_gpt:
---

{% include menu.html %}

Kreu kanalon per `Channel.new`. Enmetu valorojn per `.send` kaj elprenu ilin per `.receive`:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
say $c.receive; # 1
say $c.receive; # 2
```

Kanalo estas **vico**: valoroj eliras en la sama ordo, en kiu ili eniris — unue enen, unue eksteren. Do la unua `.receive` redonas `1`, la valoron senditan unue.

La celo de kanalo estas, ke sendi kaj ricevi estas sekure fareblaj el **malsamaj fadenoj** samtempe. Produktanto povas daŭre sendi dum konsumanto daŭre ricevas, kaj Raku certigas, ke neniu valoro perdiĝas aŭ duobliĝas:

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}
say $c.receive; # 1
```

Ĉi tie fona tasko sendas `1, 2, 3`; la ĉefa programo ricevas. `.receive` atendas, se la kanalo estas momente malplena, do la konsumanto neniam antaŭkuras la produktanton.

{% include nav.html %}
