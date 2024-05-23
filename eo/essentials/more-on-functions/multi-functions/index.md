---
title: Multi-funkcioj
---

{% include menu.html %}

Raku efektivigas _multoblan sendon_ bazitan sur funkcia subskribo. Ĝi permesas krei funkciojn kiuj dividas la nomon sed havas malsamajn tipojn de eniraj datumoj. Uzu la `multi` deklarilon por ĉiu el la variantoj de la funkcio.

```raku
multi sub add(Int $x, Int $y) { $x + $y }
multi sub add(Str $x, Str $y) { $x ~ $y }
```

(Estas bone preterlasi `sub` post `multi`.)

Se vi havas la du variantojn de la sama funkcio, la kompililo plenumas multoblan sendon depende de kiuj argumentoj estas viditaj en la funkcia voko. Komparu la jenajn du vokojn:

```raku
say add(10, 20); # 30
say add('10', '20'); # 1020
```

La unua voko ekigas la funkcion kun entjeraj parametroj, dum la dua voko funkciigas la duan varianton de la funkcio kiu atendas du ĉenojn.

## Literalaj parametroj

Interesa kazo por multi-funkcioj estas havi variantojn kiuj havas literalajn valorojn kiel parametroj. Konsideru la jenajn du variantojn:

```raku
multi sub f(42) {say 'Ĉi tio estas la respondo'}
multi sub f($x) {say "$x ne estas la respondo"}
```

La unua varianto estas nur funkciigita kiam vi vokas la funkcion kun la ĝusta valoro de 42. En aliaj kazoj, la dua varianto estas uzata. La ordo en kiu ĉi tiuj funkcioj estas difinitaj ne gravas.

```raku
f(10); # 10 ne estas la respondo
f(42); # Ĉi tio estas la respondo
```

{% include nav.html %}