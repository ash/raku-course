---
title: Quiz — Chiusure
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

La subroutine restituita si chiude su `$total`, quindi tutte e tre le chiamate condividono la stessa variabile. Le prime due la portano a `30`; la terza aggiunge `5` e stampa il totale corrente, `35`.

</div>

{% include nav.html %}
