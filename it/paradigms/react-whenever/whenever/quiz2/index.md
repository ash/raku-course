---
title: Quiz — whenever e done
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_);
        done if $_ == 2;
    }
    whenever Supply.from-list(10, 20) {
        @out.push($_);
    }
}

say @out;
```

{:.quiz}
1 | [1 2]
0 | [1 2 10 20]
0 | [1 2 3 10 20]
0 | [10 20]

{% include quiz.html %}

<div class="extended-explanation">

Il primo `whenever` spinge `1`, poi `2` — e su `2` chiama `done`. Il punto cruciale è che `done` chiude l'**intero blocco `react`**, non solo il proprio `whenever`: il resto del primo supply (`3`) e l'*intero secondo supply* (`10, 20`) vengono tagliati fuori prima di essere consegnati. Quindi `@out` contiene solo `[1 2]`. Se `done` zittisse solo il proprio flusso, avresti visto `[1 2 10 20]` — ma un solo `done` ferma tutte le reazioni insieme.

</div>

{% include nav.html %}
