---
title: Quiz — La chiamata con due punti
translations_gpt:
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
say 'programming'.substr: 0, 3;
```

{:.quiz}
1 | pro
0 | program
0 | ing
0 | (0 3)

{% include quiz.html %}

<div class="extended-explanation">

I due punti consumano *tutto* il resto dell'istruzione come lista degli argomenti, quindi `substr: 0, 3` equivale a `substr(0, 3)` — entrambi gli argomenti vengono passati. Partendo dall'indice `0` e prendendo `3` caratteri si ottiene `pro`.

</div>

{% include nav.html %}
