---
title: Pragmoj
translations_gpt:
---

{% include menu.html %}

_Pragmo_ aspektas kiel modulo ŝargita per `use`, sed anstataŭ enporti kodon ĝi ŝanĝas kompilan regulon por la resto de la nuna amplekso. Ŝaltu unu per `use` kaj (kie tio havas sencon) malŝaltu per `no`.

La plej grava pragmo, `strict`, estas **ŝaltita defaŭlte** en Raku: ĝi postulas, ke ĉiu variablo estu deklarita antaŭ uzo, kio estas la kialo, pro kiu tajperaro en variabla nomo estas kaptata anstataŭ silente krei novan variablon.

Malŝalti `strict` per `no strict` forigas tiun postulon, do vi povas atribui al variablo, kiu neniam estis deklarita per `my`:

```raku
no strict;

$x = 42;
say $x; # 42
```

Kun la defaŭlta `strict` en forto, tiu nuda `$x = 42` estus kompiltempa eraro — *Variable '$x' is not declared*. La linio `no strict` malstreĉas la regulon por la resto de la ĉirkaŭa amplekso.

Aliaj pragmoj inkluzivas `fatal` (kiu transformas kvietan malsukceson en ĵetitan escepton — oportuna, kiam vi renkontis esceptotraktadon), `isms` (por permesi idiomaĵojn pruntitajn el aliaj lingvoj), kaj `variables` (por agordi variablajn regulojn). La efiko de pragmo estas _leksika_ — ĝi daŭras nur ĝis la fino de la bloko, en kiu ĝi aperas — do vi povas streĉi aŭ malstreĉi regulon por ĝuste la regiono de kodo, kie vi volas.

Unu pragmo prenas argumenton: `lib` aldonas dosierujon al la listo, kiun Raku traserĉas dum ŝargado de moduloj — la en-programa ekvivalento de la komandlinia opcio `-I`:

```raku
use lib 'lib';
```

Vi atingos ĝin, kiam vi komencos skribi kaj ŝargi viajn proprajn [modulojn](/eo/advanced/modules-basics/using-modules).

{% include nav.html %}
