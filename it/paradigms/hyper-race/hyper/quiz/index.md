---
title: Quiz — hyper
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
say (1..4).hyper.map(* ** 2);
```

{:.quiz}
0 | (16 9 4 1)
1 | (1 4 9 16)
0 | 30
0 | (1 2 3 4)

{% include quiz.html %}

<div class="extended-explanation">

`.hyper` distribuisce il `map` fra i thread ma tiene i risultati nel loro ordine originale, quindi si comporta proprio come un `map` ordinario: elevare al quadrato ogni elemento dà `(1 4 9 16)`.

</div>

{% include nav.html %}
