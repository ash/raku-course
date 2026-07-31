---
title: La rutino reduce
translations_gpt:
---

{% include menu.html %}

Kiam vi volas redukti per propra operacio anstataŭ per unu nomita operatoro, uzu la rutinon `reduce`. Ĝi prenas blokon de du argumentoj kaj aplikas ĝin trans la listo, portante la kurantan rezulton antaŭen:

```raku
say (1..5).reduce(* + *); # 15
```

La bloko `* + *` havas du stelojn [Whatever](/eo/advanced/whatever): la unua estas la ĝisnuna rezulto, la dua estas la sekva elemento. Do `reduce` kalkulas `((((1 + 2) + 3) + 4) + 5)`, tio estas `15` — la samo kiel `[+]`, sed skribita kiel bloko.

Por vidi tiujn du argumentojn en ago, donu al ili nomojn kaj presu ĉiun paŝon. Pinta bloko redonas sian lastan esprimon, do `$x + $y` estas kaj tio, pri kio la bloko presas, kaj la valoro, kiun ĝi redonas al `reduce`:

```raku
say (1..5).reduce(
    -> $x, $y {
        say "$x + $y";
        $x + $y;
    }
);
```

Ĉi tio presas:

```
1 + 2
3 + 3
6 + 4
10 + 5
15
```

Ĉiu el la unuaj kvar linioj estas unu voko de la bloko. `$x` estas la ĝis nun akumulita rezulto kaj `$y` estas la sekva elemento el la listo. La tute unua voko ricevas la unuajn du valorojn de la listo, `1` kaj `2`; ĉiu posta voko ricevas la sumon de la antaŭa paŝo reen kiel `$x` — `3`, poste `6`, poste `10` — parigitan kun la sekva nombro kiel `$y`. La valoro de la bloko fariĝas la `$x` de la sekva voko, kaj la fina sumo, `15`, estas tio, kion `reduce` redonas kaj `say` presas en la lasta linio.

Ĉar la bloko povas esti io ajn, `reduce` estas pli ĝenerala. Ekzemple, konstrui valoron paŝon post paŝo:

```raku
say (1..4).reduce(-> $acc, $x { $acc * 10 + $x }); # 1234
```

Ĉiu paŝo multiplikas la akumulilon per dek kaj aldonas la sekvan ciferon, transformante la apartajn ciferojn `1, 2, 3, 4` en la nombron `1234`.

Kiel la aliaj blok-prenantaj metodoj, `reduce` legiĝas bone per la forma [dupunkta voko](/eo/advanced/colon-calls), kiu forlasas la krampojn ĉirkaŭ la bloko:

```raku
say (1..5).reduce: * + *; # 15
```

Mallonge, `[op]` estas la rapida formo por nomita operatoro, kaj `reduce` estas la fleksebla formo por arbitra kombina bloko. Ambaŭ faldas liston malsupren al unu sola valoro.

{% include nav.html %}
