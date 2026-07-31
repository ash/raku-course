---
title: Channel
translations_gpt:
---

{% include menu.html %}

Un _channel_ è una coda sicura fra thread: una parte del programma vi mette dentro dei valori, un'altra li prende, e Raku si occupa di tutto il lucchettaggio al posto tuo. I channel sono il modo standard di passare in sicurezza un flusso di valori fra compiti concorrenti — un produttore e un consumatore.

Questa sezione mostra come inviare e ricevere valori attraverso un channel e come la chiusura di un channel segnali che non arriveranno altri valori.

{% include nav.html %}
