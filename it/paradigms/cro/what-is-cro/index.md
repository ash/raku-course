---
title: "Che cos'è Cro"
translations_gpt:
---

{% include menu.html %}

Cro è una raccolta di librerie per costruire **servizi**: programmi che parlano con altri programmi attraverso la rete. È noto soprattutto per HTTP, ma sa anche i WebSocket, e costruisce tutto sugli strumenti reattivi visti prima in questa parte: i [supply](/it/paradigms/supplies), `react` e `whenever`. Un gestore di richieste Cro è in sostanza una reazione a un flusso di richieste in arrivo. La sua pagina principale, con la documentazione completa e gli esempi, è [cro.services](https://cro.services).

Ciò che Cro ti dà rispetto ai socket grezzi:

* **Instradamento** — associare i percorsi degli URL al codice che li gestisce, invece di analizzare le richieste a mano.
* **Oggetti richiesta e risposta** — leggere i parametri di query e inviare JSON senza mettere insieme del testo.
* **Concorrenza** — molti client vengono serviti insieme, sul pool di thread, da sé.
* **Componibilità** — i servizi sono fatti di piccoli pezzi che puoi mettere alla prova e collegare.

Lo installi dall'ecosistema:

```
zef install cro
```

Cro è un framework grande con molte dipendenze, quindi ci vogliono alcuni minuti. Se l'installazione si impunta su un identificatore di dipendenza che non riesce a trovare — un errore che nomina qualcosa come `JSON::Fast:ver<0.19+>:auth<cpan:TIMOTIMO>` — il tuo `zef` è troppo vecchio per conoscere l'archivio che serve quegli identificatori storici di modulo. Aggiorna l'installatore stesso con `zef install zef`, apri un terminale fresco e riavvia l'installazione di Cro.

Cro tira insieme tutto il corso: il progetto a oggetti per i suoi tipi, lo stile funzionale nei suoi gestori e il modello reattivo per i suoi flussi di richieste. L'argomento successivo mostra il più piccolo servizio Cro possibile, così che tu veda come queste idee si incontrano in codice web vero.

{% include nav.html %}
