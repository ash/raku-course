---
title: Quiz — make
translations_gpt:
---

{% include menu.html %}

Dentro un metodo di azione, quale funzione attacca un valore alla corrispondenza corrente?

{:.quiz}
1 | `make`
0 | `made`
0 | `take`
0 | `return`

{% include quiz.html %}

<div class="extended-explanation">

`make` conserva un valore sulla corrispondenza; `made` (o `.ast`) lo rilegge dopo. Quindi un metodo di azione calcola il proprio risultato e lo passa a `make`.

</div>

{% include nav.html %}
