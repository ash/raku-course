---
title: 'Quiz — Closures'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Die zurückgegebene Subroutine schließt sich um `$total`, alle drei Aufrufe teilen sich also dieselbe Variable. Die ersten beiden Aufrufe bringen sie auf `30`; der dritte addiert `5` und gibt die laufende Summe aus, `35`.

</div>

{% include nav.html %}
