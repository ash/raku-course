---
title: Raku, Rakudo e Raku++
translations_gpt:
---

{% include menu.html %}

**Raku** è il nome del linguaggio di programmazione, mentre un **compilatore** è il programma che legge il vostro codice e lo esegue. Raku non è legato a un solo compilatore: questo corso usa **Rakudo**, il più consolidato e completo, e ne esiste anche uno più recente chiamato **Raku++**.

## Più di un compilatore

La progettazione di Raku non impone quale compilatore usare. Ai documenti di progetto è allegata una serie di casi di test chiamata Roast; chiunque può scrivere un compilatore e, se supera quei test, è un compilatore Raku.

Per molto tempo Rakudo è stato l'unica implementazione matura, ma non è più così. Nel luglio 2026 è comparso un secondo compilatore — **Raku++** (il suo eseguibile si chiama `rakupp`), scritto in C++. È giovane e non copre ancora l'intero linguaggio, ma supera già gran parte della suite Roast e si avvia straordinariamente in fretta. Questo corso usa Rakudo per i suoi esempi, ma ciò che state imparando è il linguaggio Raku stesso, e buona parte di esso gira immutata anche su Raku++. Le pagine seguenti esaminano i due compilatori — Rakudo e Raku++ — uno alla volta, e come installarli.

## Collegamenti esterni

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ su GitHub](https://github.com/ash/rakupp)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
