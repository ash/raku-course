---
title: "Quiz — L'albero delle corrispondenze"
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
grammar Point {
    token TOP { <x> ',' <y> }
    token x   { \d+ }
    token y   { \d+ }
}

say Point.parse('3,4')<y>;
```

{:.quiz}
0 | ｢3｣
1 | ｢4｣
0 | ｢3,4｣
0 | ｢y｣

{% include quiz.html %}

<div class="extended-explanation">

Ogni token diventa un ramo con nome dell'albero delle corrispondenze. `<y>` sul risultato raggiunge il token `y`, che ha riconosciuto `4`, quindi il programma stampa `｢4｣`.

</div>

{% include nav.html %}
