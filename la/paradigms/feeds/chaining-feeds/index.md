---
title: Fluxus concatenare
translations_gpt:
---

{% include menu.html %}

Vera fluxuum utilitas apparet cum plures gradus habes. Unusquisque `==>` effectum suum ad operationem sequentem tradit, itaque tota series a summo ad imum eo ordine quo labor fit legitur:

```raku
(1..10)
    ==> grep(* %% 2)
    ==> map(* ** 2)
    ==> my @result;

say @result; # [4 16 36 64 100]
```

Sequere data per paginam deorsum: incipe a `1..10`, serva numeros pares, unumquemque in quadratum eleva, et effectum collige. Numeri pares sunt `2, 4, 6, 8, 10`, et quadrata eorum sunt `4, 16, 36, 64, 100`.

Ut catena methodorum scripta, eadem series est `(1..10).grep(* %% 2).map(* ** 2)` — et illa a sinistra ad dextram legitur sicut fluxus. Catena methodorum non ab interiore ad exterius currit; gradus suos eodem ipso ordine exsequitur. Forma quae vere ab interiore ad exterius legitur est operationes ut functiones simplices nidificare, `map(* ** 2, grep(* %% 2, 1..10))`, ubi a vocatione intima incipere et foras laborare debes.

Fluxus igitur non est modus codicem «ab interiore ad exterius» vitandi — est alia scriptura seriei a sinistra ad dextram. Quod addit est dispositio: unusquisque gradus `==>` in sua linea sedere potest, et unus operator eodem modo pro gradibus stili methodorum et stili functionum operatur, quod longam seriem facilem ad percurrendum servat. Fluxus et catenae methodorum tandem idem munus agunt; elige illud quod certam transformationem clarissimam reddit.

{% include nav.html %}
