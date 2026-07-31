---
title: Quiz — Clausuras
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

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

La subrutina devuelta se cierra sobre `$total`, así que las tres llamadas comparten la misma variable. Las dos primeras la llevan a `30`; la tercera suma `5` e imprime el total acumulado, `35`.

</div>

{% include nav.html %}
