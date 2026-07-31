---
title: Quiz — Eseguire programmi
translations_gpt:
---

{% include menu.html %}

Quale funzione passa il proprio comando attraverso la **shell** di sistema, permettendo pipe e redirezioni?

{:.quiz}
0 | `run`
1 | `shell`
0 | `exec`
0 | `system`

{% include quiz.html %}

<div class="extended-explanation">

`shell` passa una singola stringa alla shell, che interpreta funzionalità come le pipe. `run` lancia un programma direttamente con argomenti separati e senza shell, il che è più sicuro ed è la scelta predefinita migliore.

</div>

{% include nav.html %}
