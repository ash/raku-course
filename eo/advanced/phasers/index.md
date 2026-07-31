---
title: Faziloj
translations_gpt:
---

{% include menu.html %}

_Phaser_ estas speciala bloko, kiu ruliĝas aŭtomate en aparta momento de la vivo de programo, anstataŭ tie, kie ĝi aperas en la fontkodo. Vi ne vokas phaser-on; vi nur diras _kiam_ ĝia kodo ruliĝu, nomante la blokon.

La plej oftaj phasers markas stadiojn de la programo entute:

* `BEGIN` ruliĝas kiel eble plej frue, dum la programo ankoraŭ estas kompilata;
* `INIT` ruliĝas unufoje ĉe la komenco de la rulado, antaŭ la ĉefa kodo;
* `END` ruliĝas unufoje ĉe la plej fino, post kiam la ĉefa kodo finiĝis.

La sekva programo metas ĉi tiujn phaser-ojn inter ordinarajn deklarojn. Rimarku, ke la eligo ne sekvas la ordon de la linioj en la dosiero:

```raku
say 'main body';
BEGIN say 'BEGIN';
END say 'END';
INIT say 'INIT';
```

La programo presas:

```
BEGIN
INIT
main body
END
```

`BEGIN` ruliĝas unue, dum la kompilado. Poste, dum rultempo, `INIT` ruliĝas antaŭ la ĉefa korpo. La ĉefa korpo presatas sekve, kaj `END` ruliĝas laste, sendepende de kie ĝi estis skribita.

Ofta uzo de `END` estas presi resumon aŭ purigi ion ĵus antaŭ ol la programo finiĝas, dum `BEGIN` estas oportuna por laboro, kiu devas okazi antaŭ ĉio alia.

{% include nav.html %}
