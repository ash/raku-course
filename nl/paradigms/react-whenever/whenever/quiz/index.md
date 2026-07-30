---
title: 'Quiz — whenever'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De `whenever`-body draait voor elke waarde en duwt het dubbele ervan erin. De supply zendt `1, 2, 3` uit, dus verzamelt `@out` `2, 4, 6`.

</div>

{% include nav.html %}
