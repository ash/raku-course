---
title: Multobla dissendo
translations_gpt:
---

{% include menu.html %}

En la parto Esencaĵoj vi renkontis [_multi-funkciojn_](/eo/essentials/more-on-functions/multi-functions): plurajn subrutinojn kiuj havas la saman nomon, kie Raku elektas la ĝustan laŭ la tipoj de la argumentoj. Tiu mekanismo nomiĝas _multnivela sendo_ (multiple dispatch).

Ĝis nun, la elekto estis farita laŭ la _tipo_ de la argumentoj. Frazo `where` ebligas iri plu kaj sendi ankaŭ laŭ la _valoro_. Ĝi estas skribita post parametro kaj enhavas kondiĉon, kiun la argumento devas plenumi por ke tiu kandidato estu elektita:

```raku
multi sub info(Int $n where $n < 0)  { say "$n is negative" }
multi sub info(Int $n where $n == 0) { say "$n is zero" }
multi sub info(Int $n where $n > 0)  { say "$n is positive" }

info(-5);
info(0);
info(7);
```

Ĉiu voko iras al la kandidato, kies kondiĉo estas vera por la donita valoro:

```
-5 is negative
0 is zero
7 is positive
```

Ĉiuj tri kandidatoj havas la saman signaturon laŭ tipoj — unuopa `Int` — do sen la `where`-frazoj ili kolizius. La kondiĉoj igas ilin distinktaj.

## Baza kazo por rekursio

Ofta uzo de `where` estas provizi la haltan punkton de rekursio kiel apartan kandidaton. Jen la faktorialo denove, dividita en du multi-subrutinojn:

```raku
multi sub fact(Int $n where $n <= 1) { 1 }
multi sub fact(Int $n)               { $n * fact($n - 1) }

say fact(5); # 120
```

La unua kandidato traktas la bazan kazon (`$n` de `1` aŭ malpli) kaj simple redonas `1`. Ĉiu alia valoro iras al la dua kandidato, kiu vokas `fact` denove kun pli malgranda nombro. Ne estas `if` ene de la funkcio — la elekton inter baza kazo kaj rekursia paŝo faras la sendilo.

{% include nav.html %}
