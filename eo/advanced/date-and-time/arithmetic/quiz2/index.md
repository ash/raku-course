---
title: Kvizo — Aldoni monatojn
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
say Date.new(2026, 1, 31).later(:months(1));
```

{:.quiz}
1 | 2026-02-28
0 | 2026-03-03
0 | 2026-02-31
0 | 2026-03-31

{% include quiz.html %}

<div class="extended-explanation">

Unu monaton post la 31-a de januaro estus «la 31-a de februaro», kiu ne ekzistas. `later` limigas la rezulton al la lasta valida tago de la cela monato, do ĝi alvenas al la 28-a de februaro 2026 (2026 ne estas superjaro, do februaro havas 28 tagojn).

</div>

{% include nav.html %}
