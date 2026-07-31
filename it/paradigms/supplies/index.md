---
title: Supply
translations_gpt:
---

{% include menu.html %}

Questa sottoparte riguarda la programmazione _reattiva_: scrivere codice che risponde a un flusso di valori man mano che arrivano, invece di chiederli uno per uno. Il tipo centrale è il _supply_.

Un supply è una sorgente di valori nel tempo — pensalo come un flusso a cui puoi abbonarti. Attacchi un pezzo di codice a un supply, e quel codice gira una volta per **ogni** valore che il supply produce. Questo stile in cui «i valori ti vengono spinti addosso» è l'opposto dell'estrarre valori da un elenco, ed è esattamente ciò che vuoi per eventi, messaggi e dati dal vivo.

{% include nav.html %}
