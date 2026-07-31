---
title: Quiz — Avverbi
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente? Nota l'avverbio `:s` e la sequenza di spazi nel testo.

```raku
say so 'hello   world' ~~ /:s hello world/;
```

{:.quiz}
1 | True
0 | False
0 | ｢hello   world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

L'avverbio `:s` rende significativo lo spazio fra `hello` e `world` nello schema: richiede che lì ci sia dello spazio bianco. Uno o più spazi valgono tutti, quindi la sequenza di tre spazi nel testo corrisponde e il risultato è `True`. Senza `:s` lo spazio nello schema verrebbe ignorato e lo schema cercherebbe `helloworld`.

</div>

{% include nav.html %}
