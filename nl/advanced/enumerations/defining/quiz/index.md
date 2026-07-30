---
title: Quiz — Enumeraties
translations_gpt: Dutch
---

{% include menu.html %}

Wat print het volgende programma?

```raku
enum Colour <red green blue>;
say green + blue;
```

{:.quiz}
1 | 3
0 | greenblue
0 | (green blue)
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Elke constante staat voor een getal, toegekend vanaf nul in de opgegeven volgorde: `red` is `0`, `green` is `1`, `blue` is `2`. In een rekenkundige context gedragen de constanten zich als die getallen, dus `green + blue` is `1 + 2`, wat `3` is.

</div>

{% include nav.html %}
