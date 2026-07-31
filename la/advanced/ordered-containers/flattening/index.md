---
title: Complanatio et itemisatio
translations_gpt:
---

{% include menu.html %}

Cum unum ordinem intra alterum ponis, Raku elementa eorum _non_ automatice confundit. Inspice programma sequens:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;
my @c = @a, @b;

say @c.elems; # 2
say @c;       # [[1 2 3] [4 5]]
```

Ordo `@c` solum duo elementa habet: ordines `@a` et `@b`. Raku quemque continentem ut unum elementum servat potius quam contenta eius in ordinem exteriorem effundit. Idem accidit pro valore inter alios posito:

```raku
my @a = 1, 2, 3;
my @d = 0, @a, 99;
say @d; # [0 [1 2 3] 99]
```

Cum revera unam seriem planam vis, explicite eam cum subroutina `flat` pete:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat(@a, @b);       # (1 2 3 4 5)
say flat(@a, @b).elems; # 5
```

## Itemisatio

Interdum contrarium vis: continentem ab explanatione protegere, etiam intra `flat`. Constructio `$(...)` argumentum suum _itemisat_ — resultatum ut unum elementum notat. Compara exemplum praecedens cum hoc:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat($(@a), @b); # ([1 2 3] 4 5)
```

Hic, `$(@a)` ordinem `@a` ut unum elementum servat, dum `@b` adhuc in duos valores suos explanatur. Haec est idea sigilli `$` iterum: `$` significat "hoc ut rem unam tracta".

{% include nav.html %}
