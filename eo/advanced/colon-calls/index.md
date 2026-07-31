---
title: Vokado per dupunkto
translations_gpt:
---

{% include menu.html %}

Kiam vi vokas metodon au subfunkcion, vi kutime metas giajn argumentojn en krampojn: `@a.grep(* > 5)`. Raku ofertas duan formon — metu **dupunkton** post la nomo, kaj chio post la dupunkto farighas la argumenta listo, tute sen krampoj:

```raku
say (1..10).grep: * %% 2; # (2 4 6 8 10)
```

La dupunkto en `grep:` faras la saman laboron kiel la krampoj farus: `(1..10).grep: * %% 2` signifas ekzakte `(1..10).grep(* %% 2)`. La du formoj estas intershanghebla:

```raku
say <a b c>.join('-'); # a-b-c
say <a b c>.join: '-'; # a-b-c
```

La dupunkta formo estas plej agrabla kun metodoj kiuj akceptas **blokon** au [Whatever](/eo/advanced/whatever)-esprimon, char ghi forigas unu tavolon de nestado. Komparu:

```raku
my @a = 3, 1, 2;

say @a.sort({ $^b <=> $^a }); # krampoj chirkaue de la bloko
say @a.sort: { $^b <=> $^a }; # dupunkto — neniu ferma krampo por pari
```

Ambau presas `(3 2 1)`, sed la dupunkta versio legeblas pli klare, precipe kiam la bloko estas longa.

Chi tio estas la metod-voka parenceco de la senkrampa voko kiun vi jam uzas kun listaj operatoroj kiel `say 1, 2, 3` — tie, `say` prenas chion post ghi kiel siajn argumentojn. La sola regulo por memori estas ke la dupunkta formo konsumas la **reston de la deklaro** kiel argumentojn, do ghi devas esti che la **fino** de voka cheno. Tial `('a' .. 'z')».uc».ord.grep: 60 < * < 70` funkcias: `grep` estas la lasta voko, kaj estas nenio por cheni post ghi. Se vi bezonas daure voki pliajn metodojn, uzu la krampan formon anstatau au grupigu la partojn de la tuta esprimo por klarigi:

```raku
say (('a' .. 'z')».uc».ord.grep: 60 < * < 70)».chr # (A B C D E)
```

Unu afero por atenti: ne kombinu la dupunkton **kaj** krampojn kiel `.grep:( … )`. Tiu skribmaniero kolizias kun la signatur-litera sintakso `:( … )` kaj ne sukcesas parsighi. Uzu au `.grep( … )` au `.grep: …` — unu au la alia, ne ambau.

{% include nav.html %}
