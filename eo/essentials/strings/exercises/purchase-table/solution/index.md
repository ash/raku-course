---
title: Solvo al 'Aĉeti tablon'
---

{% include menu.html %}

## Kodo

Jen ebla solvo:

```raku
my $chair-price = 20.57;
my $chairs = 4;
my $chairs-total = $chair-price * $chairs;

my $table-price = 50.18;
my $tables = 1;
my $tables-total = $table-price * $tables;

say "Item\tPrice\tN\tTotal";
say "Chairs\t\$$chair-price\t$chairs\t\$$chairs-total";
say "Tables\t\$$table-price\t$tables\t\$$tables-total";
```

Ĉiuj nombroj estas malmole koditaj kaj konservitaj en kelkaj variabloj. Ni ankaŭ uzas la multiplikan operatoron `*` por kalkuli la rezulton. Ni lernos pli pri operatoroj en la sekvaj sekcioj de ĉi tiu kurso, sed nuntempe, la konstruo kiel `$chair-price * $chairs` ne devus esti io, kio kaŭzas demandojn.

La tri linioj generantaj la eliron presas la tri liniojn de la tabelo, inkluzive de ĝia kaplinio. Rimarku kiel la kolumnoj estas apartigitaj per la tabokarakteroj `\t`. En la datlinioj, ni ankaŭ vidas eskapitan dolarkarakteron: `\$` same kiel malsamajn variablojn, kiujn ni volas interpoligi.

🦋 Vi povas trovi la fontkodon en la dosiero [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/purchase-table.raku).

## Eligo

Rulu la programon kaj vidu kiel ĝi presas la tabelon:

```
$ raku exercises/strings/purchase-table.raku
Item    Price   N      Total
Chairs  $20.57  4      $82.28
Tables  $50.18  1      $50.18
```

## Komentoj

Ĉu vi rimarkis la streketo en la nomoj de la variabloj kiel `$chair-price` aŭ `$tables-total`? Ĉi tio estas perfekte akceptebla maniero nomi variablojn en Raku.

Ne konfuziĝu pro la du apudaj dolarsignoj. Raku legas ilin aparte. Ekzemple, en la subĉeno `\$$price`, la unua dolarsigno estas eskapita kaj tiel reprezentas sin mem, dum la dua estas parto de la variablonomo `$price`.

Ĉiuj ŝnuroj estas cititaj en duoblaj citiloj por permesi interpoligon de la variabloj kaj la specialaj karakteroj.

Ni revenu al ĉi tiu tasko denove post kiam ni konatiĝos kun tabeloj kaj haketoj.

{% include nav.html %}