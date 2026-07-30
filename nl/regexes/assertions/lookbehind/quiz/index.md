---
title: 'Quiz — Assertions'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say 'a=5' ~~ / <?after '='> \d+ /;
```

{:.quiz}
1 | ｢5｣
0 | ｢=5｣
0 | ｢a=5｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

De positieve lookbehind `<?after '='>` eist een `=` onmiddellijk vóór de huidige positie, waarna `\d+` de cijfers matcht. De `=` wordt gecontroleerd maar niet verbruikt, dus is de match alleen `｢5｣`.

</div>

{% include nav.html %}
