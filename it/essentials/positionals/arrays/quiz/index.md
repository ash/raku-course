---
title: Quiz — Array
---

{% include menu.html %}

C'è un array:

```raku
my @data = 10, 20, 30, 40, 50;
```

## Elementi dell'array

Cosa stampano le seguenti righe?

{:.quiz-select}

10 | `say @data[0];` — (: 10, 20, 30, 40, 50 :) | Non dimenticare che gli elementi sono contati da `0`.
40 | `say @data[3];` — (: 10, 20, 30, 40, 50 :) | L'indice `3` rappresenta il 4<sup>o</sup> elemento.
50 | `say @data[4];` — (: 10, 20, 30, 40, 50 :)

## Lunghezza dell'array

Cosa stampano le seguenti affermazioni?

{:.quiz-select}
5 | `say @data.elems;` — (: 0, 1, 2, 3, 4, 5 :)
5 | `say +@data;` — (: 0, 1, 2, 3, 4, 5 :) | Questa conversione dà la dimensione dell'array.
5 | `say +@data.elems;` — (: 0, 1, 2, 3, 4, 5 :) | Convertendo il risultato di `@data.elems` in un intero, quindi nessun cambiamento.


{% include quiz.html %}

{% include nav.html %}