---
title: "Quiz — Il feed all'indietro"
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my @out <== map(* + 1) <== (10, 20, 30);
say @out;
```

{:.quiz}
1 | [11 21 31]
0 | [31 21 11]
0 | [30 20 10]
0 | [10 20 30]

{% include quiz.html %}

<div class="extended-explanation">

`<==` cambia solo la direzione in cui la pipeline è scritta, non l'ordine dei dati. La sorgente `(10, 20, 30)` vi scorre dentro — bersaglio a sinistra — e `map(* + 1)` aggiunge uno a ogni elemento sul posto, dando `[11 21 31]`. Un flusso all'indietro non rovescia mai gli elementi; per quello servirebbe un `reverse` esplicito.

</div>

{% include nav.html %}
