---
title: Rekursio per multi-subprogramoj
translations_gpt:
---

{% include menu.html %}

Ĝis nun la baza kazo estis linio _ene_ de la subprogramo — ternario aŭ frua `return`, kiu kontrolas la argumenton. Raku ofertas pli esprimplenan manieron skribi la samon. Ĉar subprogramo povas havi plurajn kandidatojn `multi`, vi povas doni al la baza kazo kaj la rekursia paŝo **siajn proprajn apartajn subprogramojn**, kaj lasi multoblan disdonon elekti la ĝustan por ĉiu voko.

Rememoru la faktorialon. Per `multi`, ĝiaj du kazoj fariĝas du subprogramoj:

```raku
multi fact(0)  { 1 }
multi fact($n) { $n * fact($n - 1) }

say fact(5); # 120
```

La unua kandidato kongruas nur, kiam la argumento estas ekzakte `0` — tiu literalo en la subskribo _estas_ la baza kazo. Ĉiu alia voko iras al la dua kandidato, kiu multiplikas kaj rekursias. Kiam `fact($n - 1)` fine atingas `0`, la disdono ŝanĝiĝas al la unua kandidato, kaj la ĉeno de vokoj malvolviĝas. La baza kazo ne plu estas branĉo enterigita en la korpo; ĝi estas subprogramo, kiu ekzistas por unu sola valoro.

Kial `0` kaj ne `1`? Ĉar ĉiu paŝo subtrahas unu, ajna komenca nombro fine trafas ekzakte `0`, kaj `0!` estas difinita kiel `1` — do `0` estas, kie la malsupreniro vere finiĝas. Literala kandidato kongruas kun unu _ekzakta_ valoro, do bazo de `multi fact(1)` kalkulus `fact(1)` ĝuste sed lasus `fact(0)` fali tra al `multi fact($n)` kaj rekursii preter nulon senfine. Halti ĉe `0` tenas la subprogramon ĝusta por ĉiu nenegativa entjero, inkluzive de `fact(0)`.

Tio legiĝas precipe bone, kiam estas pli ol unu baza kazo. Fibonacci bezonas du:

```raku
multi fib(0) { 0 }
multi fib(1) { 1 }
multi fib($n) { fib($n - 1) + fib($n - 2) }

say fib(10); # 55
```

Ĉiu baza kazo estas sia propra unulinia kandidato, kaj la rekursia kandidato traktas ĉion alian — neniuj nestitaj kondiĉoj.

Literalo kiel `0` kongruas nur kun tiu ekzakta valoro. Kiam la baza kazo kovras _intervalon_ — «`$n` estas `1` aŭ malpli» — uzu limigon `where` anstataŭe:

```raku
multi fact($n where * <= 1) { 1 }
multi fact($n)              { $n * fact($n - 1) }

say fact(6); # 720
```

La limigita kandidato estas pli specifa, do Raku provas ĝin unue; la simpla kandidato `$n` kaptas ĉion alian.

La sama disciplino kiel antaŭe ankoraŭ validas: ĉiu rekursia vojo devas atingi baz-kazan kandidaton. La faktorialo kun literala `0`, ekzemple, estas sekura nur por nenegativaj entjeroj — `fact(-1)` paŝus preter `0` kaj rekursius senfine, ĉar neniu kandidato iam kongruus. Dividi la kazojn trans `multi`-subprogramojn ne forigas la bezonon de baza kazo; ĝi nur donas al tiu baza kazo nomon kaj propran hejmon.

{% include nav.html %}
