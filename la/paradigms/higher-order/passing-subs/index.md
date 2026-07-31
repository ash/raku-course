---
title: Subprogrammata tradere
translations_gpt:
---

{% include menu.html %}

Ut subprogramma ut parametrum accipias, illud sigillo `&` declara. Intra corpus deinde illud nomine vocare potes:

```raku
sub apply(&f, $x) {
    f($x);
}

say apply(* + 3, 10); # 13
```

Parametrus `&f` codicis partem accipit, et `f($x)` illam vocat. Hic `* + 3` tradidimus, expressionem _Whatever_ quae significat «adde tria ei quod tibi datur», itaque `apply(* + 3, 10)` `13` computat.

Subprogramma nominatum tam facile tradere potes, ad illud sigillo `&` spectans ut tradatur potius quam vocetur:

```raku
sub double($n) { $n * 2 }

sub apply(&f, $x) {
    f($x);
}

say apply(&double, 5); # 10
```

Hoc est exacte quomodo `map` et `grep` operantur: subprogrammata sunt quae aliud subprogramma — blocum tuum — accipiunt et illud unicuique elemento applicant. Tua ipsius subprogrammata quae codicem accipiunt scribere ea tam flexibilia reddit.

{% include nav.html %}
