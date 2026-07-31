---
title: 'Kvizo — `try`'
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my $r = try {
    die 'Boom!';
    say 'inside';
};

say 'outside';
```

{:.quiz}
1 | outside
0 | inside
0 | inside poste outside
0 | Boom!
0 | eraron

{% include quiz.html %}

<div class="extended-explanation">

Du aferoj okazas ĉi tie. Unue, `die` tuj ĉesigas la reston de la bloko `try`, do la linio `say 'inside'` neniam estas atingata — nenio estas presata el ene de la bloko. Due, ĉar `try` kaptas la escepton, la programo mem ne haltas: la ekzekuto daŭras preter la bloko, kaj `say 'outside'` ruliĝas normale. Do la sola presita linio estas `outside`. (`$r` estus nedifinita, kaj la mesaĝo `Boom!` atendus en `$!`, se vi rigardus.)

</div>

{% include nav.html %}
