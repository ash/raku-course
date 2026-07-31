---
title: WebSocket
translations_gpt:
---

{% include menu.html %}

Una conversazione HTTP avviene una volta sola: il client chiede, il server risponde, e la connessione è finita. Un **WebSocket** ne fa un canale a due vie di lunga durata — ciascun lato può inviare un messaggio in qualunque momento — ed è esattamente ciò di cui hanno bisogno chat, giochi e cruscotti dal vivo. Cro sa i WebSocket di suo, e un gestore WebSocket è costruito con gli strumenti reattivi che già conosci: un flusso di messaggi è un supply.

Ecco un minuscolo server di chat. Ogni messaggio che un client invia viene reso maiuscolo dal server e inviato a tutti i connessi — quindi ciò che torna indietro visibilmente *non* è ciò che è uscito, e dimostra che i dati hanno davvero fatto andata e ritorno:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Router::WebSocket;
use Cro::HTTP::Server;

my $chat = Supplier.new;

my $application = route {
    get -> 'chat' {
        web-socket -> $incoming {
            supply {
                whenever $incoming -> $message {
                    $chat.emit(uc(await $message.body-text));
                    LAST { done }
                }
                whenever $chat -> $text {
                    emit $text;
                }
            }
        }
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Chat server on ws://127.0.0.1:8080/chat — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Guarda il blocco `web-socket`: è la parte reattiva del corso in miniatura. Ogni client connesso riceve un `supply` con due `whenever`: uno osserva `$incoming`, i messaggi in arrivo *da* quel client, rende maiuscolo ciascuno e lo spinge nel `$chat` condiviso; l'altro osserva `$chat` e con `emit` rimanda ogni testo inviato *al* client. Un `Supplier`, a cui ogni connessione attinge, è tutta la stanza della chat.

Il piccolo `LAST { done }` è importante. È il [phaser](/it/advanced/block-phasers) che hai incontrato con i cicli; dentro un blocco `whenever` scatta quando il flusso osservato **finisce**, cioè quando quel client si disconnette. Chiamare lì `done` chiude l'intero supply della connessione e la disiscrive da `$chat`. Senza di esso il `whenever $chat` di un client andato resterebbe appeso, e l'invio successivo proverebbe a scrivere in un socket chiuso, stampando un errore sul server.

Un browser vi parla con poche righe di JavaScript, ma anche un altro programma Raku lo fa — Cro fornisce anche il lato client:

```raku
use Cro::WebSocket::Client;

my $conn = await Cro::WebSocket::Client.connect('ws://127.0.0.1:8080/chat');

my $got = Promise.new;

$conn.messages.tap(-> $message {
    say 'Received: ', await $message.body-text;
    $got.keep;
});

say 'Sending:  Hello, chat!';
$conn.send('Hello, chat!');

await $got;
await $conn.close;
```

`.send` fa partire il messaggio e ritorna subito; la risposta arriva più tardi su un altro thread nel blocco `.tap`. La linea principale deve quindi aspettare prima di chiudere — e invece di dormire e sperare, attende una `Promise` che la presa soddisfa nell'istante in cui la risposta arriva: gli strumenti di concorrenza visti prima in questa parte che fanno esattamente ciò per cui sono nati.

Esegui il server in un terminale e questo client in un altro. Il client stampa entrambe le direzioni della conversazione:

```
Sending:  Hello, chat!
Received: HELLO, CHAT!
```

Ciò che è uscito minuscolo è tornato maiuscolo: il messaggio ha viaggiato *verso* il server, è stato trasformato lì ed è tornato *indietro* sulla stessa connessione. È il canale a due vie in azione. Avvia il client in più terminali insieme, e ogni messaggio comparirà in tutti: una chat funzionante in meno di trenta righe di Raku.

> Questi esempi hanno bisogno di Cro installato (`zef install cro`).

È un buon posto per chiudere il corso. Un servizio, il client che lo chiama e un canale a due vie vivo in mezzo poggiano su tutto ciò che è venuto prima — oggetti ed eccezioni, regex e grammatiche e gli strumenti funzionali, concorrenti e reattivi di questa parte — eppure il codice resta breve e dice esattamente ciò che intendi. Dai [byte su un socket](/it/paradigms/connections/sending-receiving) a una stanza di chat in una schermata di codice: questo è Raku.

{% include nav.html %}
