---
title: Raku, Rakudo e Raku++
translations_gpt:
---

{% include menu.html %}

**Raku** è il nome del linguaggio di programmazione, mentre un **compilatore** è il programma che legge il vostro codice e lo esegue. Raku non è legato a un solo compilatore: questo corso usa **Rakudo**, quello consolidato, e ne esistono anche di più recenti — **Raku++** e **mutsu**.

## Più di un compilatore

La progettazione di Raku non impone quale compilatore usare. Ai documenti di progetto è allegata una serie di casi di test chiamata Roast; chiunque può scrivere un compilatore e, se supera quei test, è un compilatore Raku.

Per molto tempo Rakudo è stato l'unica implementazione matura, ma non è più così. Nel luglio 2026 è comparso un secondo compilatore — **Raku++** (il suo eseguibile si chiama `rakupp`), scritto in C++. Con la versione 5.4.1 supera l'intera suite Roast, e si avvia straordinariamente in fretta. Questo corso usa Rakudo per i suoi esempi, ma ciò che state imparando è il linguaggio Raku stesso, e quasi tutto gira immutato anche su Raku++. Le pagine seguenti esaminano questi due compilatori — Rakudo e Raku++ — uno alla volta, e come installarli.

Esiste anche una terza implementazione: **mutsu**, un interprete scritto in Rust da Tokuhiro Matsuno. Compila Raku in bytecode per una propria macchina virtuale, e grazie a WebAssembly gira anche all'interno di un browser web — il suo sito offre un tutorial di Raku e un campo da gioco basati su di esso. mutsu è in fase di sviluppo attivo e, secondo le parole del suo autore, non è ancora adatto all'uso in produzione, anche se supera già quasi tutti i file di test di Roast.

## Collegamenti esterni

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ su GitHub](https://github.com/ash/rakupp)
* [mutsu](https://tokuhirom.github.io/mutsu/)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
