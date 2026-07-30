---
title: 'Quiz — Lookahead'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Der bejahende Lookahead `<?before ' cm'>` verlangt, dass den Ziffern ` cm` folgt, was der Fall ist. Die Zusicherung prüft diesen Text, verbraucht ihn aber nicht, der Treffer ist also nur die Ziffer, `｢5｣`.

</div>

{% include nav.html %}
