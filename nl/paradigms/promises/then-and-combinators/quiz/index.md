---
title: 'Quiz — Promises combineren'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` geeft de resultaten van de twee promises op volgorde terug, `(2, 3)`. De reductiemeta-operator `[*]` vermenigvuldigt ze, wat `6` geeft.

</div>

{% include nav.html %}
