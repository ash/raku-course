---
title: Inviare e ricevere
translations_gpt:
---

{% include menu.html %}

Una volta che un socket è aperto, ci scambi dati attraverso. Invia testo con `.print` e leggi ciò che torna con `.recv`:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));

$conn.print("GET / HTTP/1.0\r\nHost: raku.org\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

Questo invia una richiesta HTTP minima e legge la risposta del server in `$response`. La prima riga di una risposta da un server web è la sua riga di stato.

> Questo esempio ha bisogno di una connessione di rete funzionante. Quando gira, stampa la riga di stato della risposta. Poiché `raku.org` reindirizza l'HTTP semplice al sito sicuro HTTPS, quella riga è un reindirizzamento, come `HTTP/1.1 308 Permanent Redirect`, invece di `200 OK`. Il dominio speciale `example.com` non reindirizza, quindi puntare la stessa richiesta là stampa un semplice `HTTP/1.1 200 OK`.

Nel parlare con i server contano due dettagli. Primo, i protocolli di rete separano di solito le righe con `\r\n` (ritorno carrello più a capo), non con un semplice `\n`, ed è per questo che la richiesta è scritta con `\r\n`. Secondo, `.recv` restituisce i dati arrivati fino a quel momento; per risposte più grandi leggi in un ciclo finché la connessione non si chiude.

Inviare byte e ricevere byte è tutto ciò che un socket fa davvero. Tutto il resto — HTTP e gli strumenti di livello più alto delle sezioni che vengono — è costruito sopra questo semplice inviare e ricevere.

{% include nav.html %}
