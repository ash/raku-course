---
title: De Whatever-ster
translations_gpt:
---

{% include menu.html %}

Je hebt de `*` misschien al zien opduiken in uitdrukkingen als `* * 2` of `* %% 2` bij het aanroepen van `map` en `grep`. Die `*` is de _Whatever-ster_, en de uitdrukking eromheen bouwt ter plekke een kleine functie met één argument. Deze sectie legt uit wat het werkelijk is, hoe het zich verhoudt tot een blok, en waar de kale ster gewoon "wat je maar wilt" betekent.

## Een ster maakt een functie

Wanneer `*` in een uitdrukking voorkomt, maakt Raku van de hele uitdrukking een functie — een `WhateverCode` — waarin de ster voor het argument staat:

```raku
my $double = * * 2;

say $double.^name; # WhateverCode
say $double(21);   # 42
```

`* * 2` is een functie die haar ene argument met twee vermenigvuldigt. Daarom werkt `(1..5).map(* * 2)`: `map` krijgt precies zo'n functie met één argument aangereikt.

## Whatever tegenover een blok

Een Whatever-uitdrukking is een kortere manier om een functie te schrijven die je ook als blok zou kunnen schrijven. Deze drie zijn gelijkwaardig:

```raku
* * 2
{ $_ * 2 }
-> $x { $x * 2 }
```

De Whatever-vorm noemt geen parameter; de blokvorm gebruikt de onderwerpsvariabele `$_`; de pijlvorm noemt `$x`. Die laatste, `-> $x { ... }`, is op zichzelf een kleine functie — je maakt er echt kennis mee in [Anonieme subroutines](/nl/advanced/anonymous-subroutines); hier volstaat het om hem te lezen als een derde manier om dezelfde functie met één argument te schrijven. Voor een eenvoudige uitdrukking is de ster het compactst, en daarom is hij zo gebruikelijk bij `map`, `grep` en `sort`:

```raku
say (1..5).map(* * 2);            # (2 4 6 8 10)
say (1..5).map({ $_ * 2 });       # (2 4 6 8 10)
say (1..5).map(-> $x { $x * 2 }); # (2 4 6 8 10)
```

Grijp naar een **blok** wanneer de logica meer dan één uitdrukking nodig heeft, of wanneer een duidelijker benoemde parameter helpt. Grijp naar de **ster** wanneer een korte uitdrukking alles zegt.

## Meer dan één ster

Elke `*` in de uitdrukking is een apart argument, op volgorde. Twee sterren maken dus een functie met **twee** argumenten:

```raku
my $add = * + *;

say $add(3, 4); # 7
```

Hier is `* + *` een functie met twee argumenten die ze optelt — bijvoorbeeld een lopend totaal en het volgende element.

## De kale Whatever

Op zichzelf betekent `*` "wat dan ook" — zoveel als er is, of geen grens. Twee alledaagse toepassingen:

```raku
my @a = 10, 20, 30;
say @a[*-1];        # 30  — * is de lengte van de array, dus *-1 is de laatste index

say (1..*).head(3); # (1 2 3)  — 1..* is een open bereik
```

In `@a[*-1]` staat de ster voor het aantal elementen, en in `1..*` staat hij voor "geen bovengrens". Of hij nu een functie bouwt of "wat je maar wilt" betekent, de ster is een van Raku's nuttigste stukjes afkorting.

{% include nav.html %}
