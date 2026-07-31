---
title: Rispondere a una richiesta
translations_gpt:
---

{% include menu.html %}

Una volta che un client si è connesso, leggi la sua richiesta e invii una risposta. Per un browser web la risposta deve essere HTTP valido: una riga di stato, intestazioni facoltative, una riga vuota e poi il corpo.

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $conn = $listener.accept;
my $request = $conn.recv;

$conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, web!\n");
$conn.close;
$listener.close;
```

La risposta rispecchia il formato della richiesta che hai visto dal lato client. `HTTP/1.0 200 OK` è la riga di stato, `Content-Type: text/plain` è un'intestazione, la riga vuota (`\r\n\r\n`) chiude le intestazioni, e `Hello, web!` è il corpo che il browser mostra.

Esegui questo programma, poi colpiscilo da un altro terminale con `curl` (o apri `http://127.0.0.1:8080/` in un browser), e stampa il corpo dritto sullo schermo:

```console
$ curl http://127.0.0.1:8080/
Hello, web!
```

Questo gestisce una sola richiesta e poi si ferma. Per servire molte richieste avvolgeresti i passi `.accept`-leggi-rispondi in un ciclo, e tipicamente gestiresti ogni connessione su un proprio thread o promise così che i client lenti non blocchino gli altri. Ma l'essenza di un server web è esattamente questa: accetta una connessione, leggi la richiesta, scrivi una risposta HTTP.

La [pagina successiva](/it/paradigms/http-server/serving-requests) fa proprio questo: un server che resta vivo, ciclando per rispondere a una richiesta dopo l'altra invece di fermarsi dopo la prima.

{% include nav.html %}
