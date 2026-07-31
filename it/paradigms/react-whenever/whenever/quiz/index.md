---
title: Quiz — whenever
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_ * 2);
    }
}

say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [2 4 6]
0 | [6]
0 | 12

{% include quiz.html %}

<div class="extended-explanation">

Il corpo del `whenever` gira per ogni valore, spingendo il doppio del valore. Il supply emette `1, 2, 3`, quindi `@out` raccoglie `2, 4, 6`.

</div>

{% include nav.html %}
