---
title: Classi di azione
translations_gpt:
---

{% include menu.html %}

I blocchi `{ make … }` in linea funzionano, ma ingombrano una grammatica di logica e la rendono più difficile da leggere. La soluzione ordinata è una _classe di azioni_: una classe separata i cui metodi portano il nome dei token della grammatica e forniscono il `make` per ciascuno.

Questa sezione mostra come scrivere una classe di azioni, come consegnarla a `.parse` e quando preferirla alle azioni in linea.

{% include nav.html %}
