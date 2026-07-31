---
title: Kvizo — Pakoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
module M {
    my $x = 5;
}

say $M::x.defined;
```

{:.quiz}
1 | False
0 | True
0 | 5
0 | Eraron

{% include quiz.html %}

<div class="extended-explanation">

`$x` estas deklarita per `my`, do ĝi estas leksika kaj neniam eniras la nomspacon `M`. La vojo `$M::x` do trovas nenion — nedifinitan valoron — kaj `.defined` estas `False`. Nur `our`-variablo estus atingebla tiel.

</div>

{% include nav.html %}
