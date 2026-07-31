---
title: Stella Whatever
translations_gpt:
---

{% include menu.html %}

Fortasse vidisti `*` in expressionibus adhibitum qualis est `* * 2` vel `* %% 2` cum `map` et `grep` vocantur. Illud `*` est _stella Whatever_, et expressio circa eam parvam functionem unius argumenti statim aedificat. Haec sectio explicat quid revera sit, quomodo ad clausulam se habeat, et ubi stella nuda simpliciter «quidquid vis» significet.

## Stella functionem facit

Cum `*` in expressione apparet, Raku totam expressionem in functionem vertit — in `WhateverCode` — in qua stella argumentum repraesentat:

```raku
my $double = * * 2;

say $double.^name; # WhateverCode
say $double(21);   # 42
```

`* * 2` est functio quae unum argumentum suum per duo multiplicat. Hac de causa `(1..5).map(* * 2)` operatur: `map` exacte talem functionem unius argumenti accipit.

## Whatever et clausula comparatae

Expressio Whatever est brevior modus scribendi functionem quam etiam ut clausulam scribere posses. Haec tria aequipollent:

```raku
* * 2
{ $_ * 2 }
-> $x { $x * 2 }
```

Forma Whatever nullum parametrum nominat; forma clausulae variabili thematis `$_` utitur; forma cuspidata `$x` nominat. Illa ultima, `-> $x { ... }`, per se parva functio est — eam proprie in [Subprogrammatis anonymis](/la/advanced/anonymous-subroutines) invenies; hic satis est eam ut tertium modum eiusdem functionis unius argumenti legere. Ad simplicem expressionem stella est brevissima, quapropter tam frequens est cum `map`, `grep` et `sort`:

```raku
say (1..5).map(* * 2);            # (2 4 6 8 10)
say (1..5).map({ $_ * 2 });       # (2 4 6 8 10)
say (1..5).map(-> $x { $x * 2 }); # (2 4 6 8 10)
```

**Clausulam** adhibe cum logica plus quam una expressione eget, vel cum parametrum nominatum clarius adiuvat. **Stellam** adhibe cum brevis expressio omnia dicit.

## Plures stellae

Unaquaeque `*` in expressione argumentum separatum est, ordine. Itaque duae stellae functionem **duorum** argumentorum faciunt:

```raku
my $add = * + *;

say $add(3, 4); # 7
```

Hic `* + *` est functio duorum argumentorum quae argumenta sua addit — exempli gratia summam currentem et elementum sequens.

## Stella nuda

Per se `*` «quidquid» significat — quantum est, vel nullum limitem. Duo usus cotidiani:

```raku
my @a = 10, 20, 30;
say @a[*-1];        # 30  — * est longitudo ordinis, ergo *-1 est index ultimus

say (1..*).head(3); # (1 2 3)  — 1..* est intervallum sine fine
```

In `@a[*-1]` stella numerum elementorum repraesentat, et in `1..*` «nullum terminum superiorem» significat. Sive functionem aedificat sive «quidquid vis» significat, stella est unum ex utilissimis Raku compendiis.

{% include nav.html %}
