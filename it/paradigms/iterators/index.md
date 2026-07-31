---
title: Iteratori
translations_gpt:
---

{% include menu.html %}

La sezione precedente ha costruito sequenze con `gather` e `take`. Questa scende di un livello, al meccanismo che consegna davvero i valori: l'_iteratore_.

Un iteratore è il piccolo oggetto che sta dietro a ogni elenco, intervallo e sequenza pigra in Raku. Sa fare una cosa sola — produrre il valore **successivo** — e nient'altro. Ogni volta che scrivi un ciclo `for` o chiami `map`, Raku chiede in silenzio a un iteratore un valore alla volta finché non ne restano più. Questa sezione mostra quel protocollo direttamente: come estrarre valori da un iteratore a mano e come scrivere un iteratore tuo.

{% include nav.html %}
