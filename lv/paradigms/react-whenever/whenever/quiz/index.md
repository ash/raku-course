---
title: Viktorīna — whenever
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

`whenever` ķermenis izpildās katrai vērtībai, ieliekot masīvā tās dubultoto vērtību. Supply izstaro `1, 2, 3`, tāpēc `@out` savāc `2, 4, 6`.

</div>

{% include nav.html %}
