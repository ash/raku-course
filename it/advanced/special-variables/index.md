---
title: Variabili speciali e dinamiche
---

{% include menu.html %}

I nomi delle variabili in Raku possono contenere un secondo marcatore dopo il sigillo, chiamato _twigil_. Il twigil indica qualcosa su dove risiede la variabile e come viene trovata — se ha scope dinamico, se e' fornita dal compilatore, o se e' legata a un oggetto.

Questa sezione spiega i twigil, esamina da vicino il tipo piu' utile — le variabili _dinamiche_, che vengono cercate attraverso lo stack delle chiamate anziche' tramite il normale scope lessicale — e passa in rassegna le variabili speciali che Raku predefinisce per te.

{% include nav.html %}
