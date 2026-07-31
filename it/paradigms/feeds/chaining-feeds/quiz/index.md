---
title: Quiz — Feed
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
(10, 20, 30) ==> map(* + 5) ==> my @r;
say @r;
```

{:.quiz}
1 | [15 25 35]
0 | [10 20 30]
0 | [15]
0 | 35

{% include quiz.html %}

<div class="extended-explanation">

Il flusso manda l'elenco dentro `map(* + 5)`, che aggiunge cinque a ogni elemento, e raccoglie il risultato in `@r`. Quindi `@r` è `[15 25 35]`.

</div>

{% include nav.html %}
