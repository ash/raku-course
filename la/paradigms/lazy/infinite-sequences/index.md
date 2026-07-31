---
title: Sequentiae infinitae
translations_gpt:
---

{% include menu.html %}

Substitue valorem finalem per `*` et sequentia **infinita** fit — ultimum elementum non habet. Quia index piger est, hoc omnino tutum est: nihil computatur donec illud sumas.

```raku
say (1, 2, 4 ... *).head(5); # (1 2 4 8 16)
```

Series potentiarum duorum in perpetuum pergit, sed `.head(5)` solas quinque primas extrahit. Intervallum `1..*` simplicissima sequentia infinita est — omnes integri ab uno:

```raku
say (1..*).head(3);          # (1 2 3)
say (1..*).map(* ** 2).head(4); # (1 4 9 16)
```

Sequentiam etiam per propria elementa priora definire potes. Sequentia Fibonacci, ubi unusquisque numerus summa duorum priorum est, celebriter una linea scribitur:

```raku
my @fib = 1, 1, * + * ... *;
say @fib[^10]; # (1 1 2 3 5 8 13 21 34 55)
```

Clausura `* + *` duo elementa priora capit eaque addit. Sequentiam in `@fib` reponere hic rectum est quia operator `...` eam ut pigram notat, itaque ordo non conatur eam totam computare — sola decem elementa a `@fib[^10]` petita umquam producuntur.

Regula pollicis: sequentia infinita tuta est dum ex ea solam partem finitam extrahis.

{% include nav.html %}
