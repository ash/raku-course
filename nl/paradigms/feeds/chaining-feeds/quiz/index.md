---
title: 'Quiz — Feeds'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
(10, 20, 30) ==> map(* + 5) ==> my @r;
say @r;
```

{:.quiz}
1 | [15 25 35]
0 | [10 20 30]
0 | [15]
0 | 35

{% include quiz.html %}

<div class="extended-explanation">

De feed stuurt de lijst naar `map(* + 5)`, die er bij elk element vijf bij optelt, en verzamelt het resultaat in `@r`. Dus `@r` is `[15 25 35]`.

</div>

{% include nav.html %}
