---
title: Quiz — Pragma
---

{% include menu.html %}

Con il pragma `strict` di Raku attivo per impostazione predefinita, cosa succede quando si assegna un valore a una variabile mai dichiarata, come in `$x = 42`?

{:.quiz}
1 | È un errore di compilazione
0 | Crea silenziosamente `$x`
0 | Stampa un avviso ma viene eseguito
0 | Imposta `$x` a `Nil`

{% include quiz.html %}

<div class="extended-explanation">

`strict` è attivo per impostazione predefinita e richiede che ogni variabile sia dichiarata prima con `my`, quindi un semplice `$x = 42` non viene compilato — *Variable '$x' is not declared*. Disattivando il pragma con `no strict` l'assegnamento verrebbe accettato.

</div>

{% include nav.html %}
