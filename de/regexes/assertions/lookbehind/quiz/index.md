---
title: 'Quiz — Zusicherungen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Der bejahende Lookbehind `<?after '='>` verlangt ein `=` unmittelbar vor der aktuellen Position, dann trifft `\d+` die Ziffern. Das `=` wird geprüft, aber nicht verbraucht, der Treffer ist also nur `｢5｣`.

</div>

{% include nav.html %}
