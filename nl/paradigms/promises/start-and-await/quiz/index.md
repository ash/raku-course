---
title: 'Quiz — Promises'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` draait het blok op de achtergrond en geeft een promise terug. `await` wacht erop en geeft het resultaat van het blok terug, `100 / 4`, dat wil zeggen `25`.

</div>

{% include nav.html %}
