---
title: Thread
translations_gpt:
---

{% include menu.html %}

Un _thread_ è una linea di esecuzione indipendente che gira accanto al resto del tuo programma. Avviare un thread permette a un pezzo di lavoro di avvenire in secondo piano mentre il programma principale prosegue.

I thread sono lo strumento di concorrenza di più basso livello in Raku. Nel codice di tutti i giorni ricorrerai di solito alle [_promise_](/it/paradigms/promises) di livello più alto della sezione successiva, che sono costruite sopra i thread ma sono molto più facili da combinare. Vale comunque la pena vedere il meccanismo di base: come avviare un thread e come aspettarlo.

{% include nav.html %}
