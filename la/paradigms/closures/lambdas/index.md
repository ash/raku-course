---
title: Lambdae
translations_gpt:
---

{% include menu.html %}

_Lambda_ est functio sine nomine. Duobus modis unam scribendi iam occurristi. Primus est **[blocus cuspidatus](/la/advanced/anonymous-subroutines)**, qui parametros suos post sagittam `->` enumerat:

```raku
my &square = -> $x { $x * $x };
say square(7); # 49
```

Secundus est forma **[Whatever](/la/advanced/whatever)**, ubi `*` locum argumenti tenet et expressio circa illam functio unius argumenti fit:

```raku
my &square = * ** 2;
say square(7); # 49
```

Utraque idem genus rei creat: partem codicis quam servare, tradere et vocare potes. Lambdae splendent ut argumenta functionum ordinis superioris, ubi eas nominare solum impediret:

```raku
say (1..5).map(-> $n { $n * $n }); # (1 4 9 16 25)
say (1..5).map(* ** 2);            # (1 4 9 16 25)
```

Forma cuspidata clarior est cum corpus longius est vel plures parametros accipit; forma Whatever mirabiliter brevis est pro expressionibus simplicibus. Duae scripturae eiusdem ideae sunt: functio sine nomine.

{% include nav.html %}
