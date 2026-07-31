---
title: hyper e race 🆕
translations_gpt:
---

{% include menu.html %}

Le operazioni funzionali su elenchi che hai incontrato prima — `map` e `grep` — elaborano i loro elementi uno dopo l'altro. Quando il lavoro su ciascun elemento è indipendente e consistente, Raku può eseguirlo **in parallelo** su più core della CPU, quasi senza cambiare il tuo codice.

Due metodi lo accendono: `.hyper`, che tiene i risultati in ordine, e `.race`, che non lo fa ma può essere un po' più veloce. Questa sezione mostra entrambi.

{% include nav.html %}
