---
title: Quiz — whenever
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Corpus `whenever` pro unoquoque valore currit, duplum eius immittens. Supply `1, 2, 3` emittit, itaque `@out` `2, 4, 6` colligit.

</div>

{% include nav.html %}
