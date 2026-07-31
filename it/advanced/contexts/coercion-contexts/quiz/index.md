---
title: Quiz — Contesti
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
my @a = 10, 20, 30;
say +@a;
```

{:.quiz}
0 | 60
1 | 3
0 | 10
0 | 10 20 30

{% include quiz.html %}

<div class="extended-explanation">

Il prefisso `+` forza il contesto numerico. Per un array, il valore numerico e il suo numero di elementi, quindi `+@a` e `3`, non la somma. Usa `~` per il contesto stringa (`10 20 30`) o `[+]` per sommare effettivamente gli elementi.

</div>

{% include nav.html %}
