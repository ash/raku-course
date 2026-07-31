---
title: "L'albero di analisi, make e made"
translations_gpt:
---

{% include menu.html %}

L'analisi ti dice che una stringa corrisponde a una grammatica, e costruisce un _albero di analisi_: un oggetto match con una cattura con nome per ogni token. Ma di solito non vuoi il testo grezzo; vuoi un **risultato**: l'intero `42`, non i caratteri `4` e `2`.

Questa sezione mostra come percorrere l'albero di analisi e come attaccare a una corrispondenza un valore calcolato con `make`, per poi rileggerlo con `made`.

{% include nav.html %}
