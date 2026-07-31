---
title: Una rotta Cro
translations_gpt:
---

{% include menu.html %}

Un servizio HTTP di Cro si descrive con una serie di _rotte_: ogni rotta dice quale URL gestisce e che cosa restituisce. Le costruisci in un blocco `route` con la parola chiave `get`:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080/hello — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Leggi la rotta come «una richiesta `GET` al percorso `hello` restituisce il testo `Hello from Cro!`». La funzione `content` imposta insieme il tipo di contenuto e il corpo — nessuna riga di stato scritta a mano e nessun `\r\n` all'orizzonte. `Cro::HTTP::Server` lega le rotte a un indirizzo e a una porta, e `.start` comincia a servire.

Una finezza: `.start` **non** blocca — avvia il servizio su thread in secondo piano e ritorna subito, e se il programma finisse lì il server sparirebbe con lui. È il blocco `react` finale a tenere vivo il programma, ed è una vecchia conoscenza: `whenever signal(SIGINT)` reagisce al segnale di interruzione (Ctrl-C sulla tastiera) fermando il server e chiamando `done`. Gli strumenti reattivi visti prima in questa parte sono esattamente ciò con cui un programma Cro aspetta, serve e chiude in modo pulito.

> Questo esempio ha bisogno di Cro installato (`zef install cro`). Eseguilo, apri `http://127.0.0.1:8080/hello` e ferma il server con Ctrl-C quando hai finito.

> Non prendertela se, mentre curiosi, il server stampa ogni tanto `Cannot write to a closed socket`. Non è un errore nel tuo codice: un client — di solito un browser — ha aperto una connessione e l'ha lasciata cadere prima di leggere la risposta, come i browser fanno regolarmente per le richieste speculative o annullate. Cro prende nota del client sparito, e il server continua a servire.

Una rotta può prendere pezzi dell'URL come parametri, restituire JSON e molto altro, ma la forma è sempre questa: dichiarare che cosa fa ogni percorso, consegnare le rotte a un server e avviarlo. Rispetto al server su socket grezzi della sezione precedente, Cro ti toglie di mano tutta la contabilità del protocollo e ti lascia scrivere solo la parte che costituisce il tuo servizio.

Questa rotta, però, dice sempre la stessa cosa. La pagina successiva fa leggere a una rotta un **parametro** dall'URL, così che una sola rotta possa salutare `/hello/Anna` e `/hello/Bob` in modo diverso.

{% include nav.html %}
