---
title: Quiz — Elementalis contextus
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
my @a = 1, 2, 3;
my $n = 0;
$n++ for $(@a);
say $n;
```

{:.quiz}
0 | 3
1 | 1
0 | 0
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

Contextualiser `$( … )` contextum item cogit, itaque ordo ut unus valor tractatur potius quam ut lista elementorum. Ansa `for` igitur unum item videt et corpus suum semel tantum exsequitur, relinquens `$n` ad `1`. Sine `$( )`, ansa ter iteraret.

</div>

{% include nav.html %}
