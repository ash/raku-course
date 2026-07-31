---
title: La Whatever-stelo
translations_gpt:
---

{% include menu.html %}

Vi eble vidis la `*` uzatan en esprimoj kiel `* * 2` aŭ `* %% 2` dum vokado de `map` kaj `grep`. Tiu `*` estas la _Whatever-stelo_, kaj la esprimo ĉirkaŭ ĝi konstruas etan unu-argumentan funkcion senvole. Ĉi tiu sekcio klarigas kio ĝi vere estas, kiel ĝi rilatas al bloko, kaj kie la nuda stelo simple signifas "kion ajn vi volas".

## Stelo kreas funkcion

Kiam `*` aperas en esprimo, Raku transformas la tutan esprimon en funkcion — `WhateverCode` — en kiu la stelo reprezentas la argumenton:

```raku
my $double = * * 2;

say $double.^name; # WhateverCode
say $double(21);   # 42
```

`* * 2` estas funkcio kiu multiplikas sian unu argumenton per du. Tial `(1..5).map(* * 2)` funkcias: `map` ricevas ĝuste tian unu-argumentan funkcion.

## Whatever kontraŭ bloko

Whatever-esprimo estas pli mallonga maniero skribi funkcion, kiun vi ankaŭ povus skribi kiel blokon. Ĉi tiuj tri estas ekvivalentaj:

```raku
* * 2
{ $_ * 2 }
-> $x { $x * 2 }
```

La Whatever-formo ne nomas parametron; la blok-formo uzas la teman variablon `$_`; la pintforma nomas `$x`. Tiu lasta, `-> $x { ... }`, estas memstara malgranda funkcio — vi renkontos ĝin ĝuste en [Anonimaj funkcioj](/eo/advanced/anonymous-subroutines); ĉi tie sufiĉas legi ĝin kiel trian manieron skribi la saman unu-argumentan funkcion. Por simpla esprimo la stelo estas la plej kompakta, tial ĝi estas tiel ofta kun `map`, `grep`, kaj `sort`:

```raku
say (1..5).map(* * 2);            # (2 4 6 8 10)
say (1..5).map({ $_ * 2 });       # (2 4 6 8 10)
say (1..5).map(-> $x { $x * 2 }); # (2 4 6 8 10)
```

Uzu **blokon** kiam la logiko bezonas pli ol unu esprimon, aŭ kiam pli klara nomita parametro helpas. Uzu la **stelon** kiam mallonga esprimo diras ĉion.

## Pli ol unu stelo

Ĉiu `*` en la esprimo estas aparta argumento, laŭ ordo. Do du steloj kreas **du**-argumentan funkcion:

```raku
my $add = * + *;

say $add(3, 4); # 7
```

Ĉi tie `* + *` estas du-argumenta funkcio kiu aldonas siajn argumentojn — ekzemple kuranta sumo kaj la sekva elemento.

## La nuda Whatever

Sole, `*` signifas "kion ajn" — tiom kiom ekzistas, aŭ sen limo. Du ĉiutagaj uzoj:

```raku
my @a = 10, 20, 30;
say @a[*-1];        # 30  — * estas la tabellongo, do *-1 estas la lasta indekso

say (1..*).head(3); # (1 2 3)  — 1..* estas senfinpunkta amplekso
```

En `@a[*-1]` la stelo reprezentas la nombron de elementoj, kaj en `1..*` ĝi signifas "sen supra limo". Ĉu ĝi konstruas funkcion aŭ signifas "kion ajn vi volas", la stelo estas unu el la plej utilaj mallongigoj de Raku.

{% include nav.html %}
