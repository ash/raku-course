---
title: Lambdoj
translations_gpt:
---

{% include menu.html %}

_Lambdo_ estas funkcio sen nomo. Vi jam renkontis du manierojn skribi unu. La unua estas la **[pinta bloko](/eo/advanced/anonymous-subroutines)**, kiu listigas siajn parametrojn post la sago `->`:

```raku
my &square = -> $x { $x * $x };
say square(7); # 49
```

La dua estas la formo **[Whatever](/eo/advanced/whatever)**, kie `*` reprezentas la argumenton kaj la esprimo ĉirkaŭ ĝi fariĝas unu-argumenta funkcio:

```raku
my &square = * ** 2;
say square(7); # 49
```

Ambaŭ kreas la saman specon de aĵo: pecon de kodo, kiun vi povas konservi, transdoni kaj voki. Lambdoj brilas kiel argumentoj al altordaj funkcioj, kie nomi ilin nur malhelpus:

```raku
say (1..5).map(-> $n { $n * $n }); # (1 4 9 16 25)
say (1..5).map(* ** 2);            # (1 4 9 16 25)
```

La pinta formo estas pli klara, kiam la korpo estas pli longa aŭ prenas plurajn parametrojn; la formo Whatever estas mirinde mallonga por simplaj esprimoj. Ili estas du literumoj de la sama ideo: funkcio sen nomo.

{% include nav.html %}
