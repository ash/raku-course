---
title: 'Quiz — Subroutines meegeven'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
sub negate($n) { -$n }

sub apply(&f, $x) {
    f($x);
}

say apply(&negate, 7);
```

{:.quiz}
1 | -7
0 | 7
0 | 0
0 | &negate

{% include quiz.html %}

<div class="extended-explanation">

Een benoemde subroutine wordt met de sigil `&` meegegeven, dus `&negate` overhandigt de subroutine zelf aan `apply` in plaats van haar aan te roepen. Binnenin draait `f(7)` haar, wat `-7` geeft.

</div>

{% include nav.html %}
