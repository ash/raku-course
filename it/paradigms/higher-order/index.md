---
title: Funzioni di ordine superiore
translations_gpt:
---

{% include menu.html %}

In Raku una subroutine è un valore ordinario: puoi conservarla in una variabile, passarla a un'altra subroutine e restituirla come risultato. Una subroutine che **prende** o **restituisce** un'altra subroutine si chiama _funzione di ordine superiore_, ed è il cuore della programmazione funzionale.

Hai già usato funzioni di ordine superiore senza chiamarle per nome: `map`, `grep` e `sort` prendono tutte un blocco di codice come argomento. Questa sezione mostra come scrivere le tue.

Questi metodi che prendono blocchi sono anche un posto naturale per la forma della _chiamata con i due punti_, che ti permette di lasciar cadere le parentesi — `(1..10).grep: * %% 2` invece di `(1..10).grep(* %% 2)`. È introdotta in [Chiamare con i due punti](/it/advanced/colon-calls), e la scorciatoia `*` che usa è la [stella Whatever](/it/advanced/whatever).

{% include nav.html %}
