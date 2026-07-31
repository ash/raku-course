---
title: Subprogrammata anonyma
translations_gpt:
---

{% include menu.html %}

Subroutina nomen habere non debet. Subroutina _anonyma_ eodem modo scribitur quo subroutina ordinaria, sed sine nomine, et plerumque in variabili servatur ut postea eam vocare possis.

```raku
my $double = sub ($x) {
    $x * 2
};

say $double(5); # 10
```

Variabilis `$double` subroutinam continet, et `$double(5)` eam cum argumento `5` vocat.

## Cuspides acutae

Raku breviorem notationem eiusdem rei offert -- _cuspidem acutam_. Sagitta `->` utitur ad parametros introducendos, et neque verbo `sub` neque parenthesibus circa eos eget:

```raku
my $double = -> $x {
    $x * 2
};

say $double(5); # 10
```

Hic est modus usitatissimus parvam subroutinam anonymam scribendi.

## Sigillum `&`

Si subroutinam potius nomine quam per variabilem `$` vocare vis, variabilem cum sigillo `&` declara. Tum eam sine sigillo vocare potes, prorsus sicut subroutinam ordinariam:

```raku
my &triple = -> $x {
    $x * 3
};

say triple(4); # 12
```

## Transmissio ad aliam functionem

Subroutinam anonymam in variabili servare omnino non opus est. Quia mera est valor, eam statim functioni tradere potes quae talem exspectat -- ut `map`, `grep`, vel `sort`:

```raku
say (1, 2, 3).map(-> $x { $x * 2 }); # (2 4 6)
```

Cuspis acuta hic est subroutina anonyma, et `map` eam semel pro quoque elemento vocat. Hoc re vera est quod semper fecisti: omnis `{ ... }` clausura et `-> $x { ... }` quam ad `map` et `grep` tradidisti, parva subroutina anonyma est, ibi scripta ubi opus est, non prius nominata.

{% include nav.html %}
