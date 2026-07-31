---
title: Rutina reduce
translations_gpt:
---

{% include menu.html %}

Cum operatione propria potius quam uno operatore nominato reducere vis, utere rutina `reduce`. Blocum duorum argumentorum accipit et illum per indicem applicat, effectum currentem porro ferens:

```raku
say (1..5).reduce(* + *); # 15
```

Blocus `* + *` duas stellas [Whatever](/la/advanced/whatever) habet: prima est effectus adhuc collectus, secunda est elementum sequens. Itaque `reduce` `((((1 + 2) + 3) + 4) + 5)` computat, id est `15` — idem quod `[+]`, sed ut blocus scriptum.

Ut illa duo argumenta in actione videas, da eis nomina et unumquemque gradum imprime. Blocus cuspidatus ultimam expressionem suam reddit, itaque `$x + $y` et est id de quo blocus nuntiat et valor quem ad `reduce` reddit:

```raku
say (1..5).reduce(
    -> $x, $y {
        say "$x + $y";
        $x + $y;
    }
);
```

Hoc imprimit:

```
1 + 2
3 + 3
6 + 4
10 + 5
15
```

Unaquaeque ex quattuor primis lineis una vocatio bloci est. `$x` est effectus adhuc collectus et `$y` est elementum sequens ex indice. Prima omnium vocatio duos primos indicis valores accipit, `1` et `2`; unaquaeque vocatio posterior summam gradus prioris ut `$x` retro accipit — `3`, deinde `6`, deinde `10` — cum numero sequenti ut `$y` coniunctam. Valor bloci `$x` vocationis sequentis fit, et summa finalis, `15`, est id quod `reduce` reddit et `say` in ultima linea imprimit.

Quia blocus quidlibet esse potest, `reduce` generalior est. Exempli gratia, valorem gradatim aedifica:

```raku
say (1..4).reduce(-> $acc, $x { $acc * 10 + $x }); # 1234
```

Unusquisque gradus accumulatorem per decem multiplicat et cifram sequentem addit, cifras separatas `1, 2, 3, 4` in numerum `1234` vertens.

Sicut ceterae methodi quae blocos accipiunt, `reduce` bene legitur forma [vocationis cum colo](/la/advanced/colon-calls), quae parentheses circa blocum omittit:

```raku
say (1..5).reduce: * + *; # 15
```

Breviter: `[op]` forma celeris est pro operatore nominato, et `reduce` forma flexibilis pro quolibet bloco coniungenti. Utraque indicem in unum valorem complicat.

{% include nav.html %}
