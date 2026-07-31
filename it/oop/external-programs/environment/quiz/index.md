---
title: "Quiz — L'ambiente"
translations_gpt:
---

{% include menu.html %}

Quale variabile contiene le variabili d'ambiente del programma?

{:.quiz}
0 | `@*ARGS`
1 | `%*ENV`
0 | `$*ENV`
0 | `%ENV`

{% include quiz.html %}

<div class="extended-explanation">

`%*ENV` è l'hash dinamico delle variabili d'ambiente, letto per nome come `%*ENV<HOME>`. `@*ARGS` contiene invece gli argomenti della riga di comando.

</div>

{% include nav.html %}
