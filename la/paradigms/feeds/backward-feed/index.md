---
title: Fluxus retroversus
translations_gpt:
---

{% include menu.html %}

Omnis fluxus adhuc prorsum per `==>` fluxit, a fonte a sinistra in scopum a dextra. Raku etiam operatorem speculi habet, `<==`, **fluxum retroversum**. Contrario modo currit: scopus a **sinistra** sedet, et data a fonte a **dextra** intro trahuntur.

Ecce series numerorum parium ex superioribus, retroverse scripta:

```raku
my @evens <== grep(* %% 2) <== (1..10);
say @evens; # [2 4 6 8 10]
```

Lege a dextra ad sinistram: cape `1..10`, serva numeros pares, et eos in `@evens` collige. Effectus exacte idem est ac `(1..10) ==> grep(* %% 2) ==> my @evens` — sola directio in qua gradus scribis mutata est.

Fluxus retroversi eodem modo concatenantur, et rursus scopus ducit:

```raku
my @result <== map(* ** 2) <== grep(* %% 2) <== (1..10);
say @result; # [4 16 36 64 100]
```

Labor adhuc a fonte incipiens fit — incipe a `1..10`, serva pares, eos in quadratum eleva — sed in pagina gradus a destinatione retro ad originem enumerantur. Ordo elementorum intactus est; `<==` solam directionem legendi mutat, numquam data.

Quia codex plerumque a sinistra ad dextram legitur, prorsus `==>` naturalius legi solet: data primum invenis eaque sequeris quo perveniant. Retroversus `<==` adest illis occasionibus cum destinatione ducere fabulam melius narrat — nominans *id quod aedificas* ante *id ex quo aedificatur*. Duo exacta specula sunt, itaque elige quamcumque directionem melius legitur.

{% include nav.html %}
