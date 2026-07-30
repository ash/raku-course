---
title: 'Quiz — Lookahead'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say '5 cm' ~~ / \d+ <?before ' cm'> /;
```

{:.quiz}
1 | ｢5｣
0 | ｢5 cm｣
0 | False
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

De positieve lookahead `<?before ' cm'>` eist dat de cijfers door ` cm` gevolgd worden, wat het geval is. De assertion controleert die tekst maar verbruikt haar niet, dus is de match alleen het cijfer, `｢5｣`.

</div>

{% include nav.html %}
