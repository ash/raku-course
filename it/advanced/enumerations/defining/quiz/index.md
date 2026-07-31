---
title: Quiz — Enumerazioni
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
enum Colour <red green blue>;
say green + blue;
```

{:.quiz}
1 | 3
0 | greenblue
0 | (green blue)
0 | un errore

{% include quiz.html %}

<div class="extended-explanation">

Ogni costante corrisponde a un numero, assegnato a partire da zero nell'ordine elencato: `red` e' `0`, `green` e' `1`, `blue` e' `2`. In un contesto aritmetico le costanti agiscono come quei numeri, quindi `green + blue` e' `1 + 2`, cioe' `3`.

</div>

{% include nav.html %}
