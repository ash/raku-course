---
title: Quiz — Clausurae
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
sub make-acc {
    my $total = 0;
    return sub ($x) { $total += $x };
}

my &add = make-acc;
add(10);
add(20);
say add(5);
```

{:.quiz}
0 | 5
0 | 30
1 | 35
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Subprogramma redditum super `$total` clauditur, itaque omnes tres vocationes eandem variabilem communicant. Duae primae vocationes eam ad `30` adducunt; tertia `5` addit et summam currentem imprimit, `35`.

</div>

{% include nav.html %}
