---
title: Servire molte richieste
translations_gpt:
---

{% include menu.html %}

Il server della pagina precedente gestiva una sola richiesta e poi si fermava. Un server vero continua a girare, rispondendo a un client dopo l'altro. Avvolgi i passi accetta-leggi-rispondi in un `loop` — e poiché il ciclo condivide le variabili dichiarate attorno a esso, puoi mantenere uno stato fra le richieste. Qui il server conta i propri clienti e dice a ciascuno il proprio numero:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $customer = 0;

loop {
    my $conn = $listener.accept;
    $conn.recv;
    $customer++;

    # a qq:to heredoc makes a tidy template — the variable interpolates straight in
    my $body = qq:to/END/;
        Hello!
        You are customer number $customer.
        Thanks for visiting.
        END

    # send the header first, then the body, as two separate writes
    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n");
    $conn.print($body);

    $conn.close;
}
```

`.accept` **blocca** finché un client non si connette, poi restituisce un socket fresco per quella singola conversazione. Poiché `$customer` vive fuori dal ciclo, sopravvive da una richiesta alla successiva: il primo visitatore è il cliente `1`, il secondo il `2` e così via. Il ciclo non finisce mai da solo, quindi il server resta su finché non lo fermi con Ctrl-C.

Vale la pena notare due dettagli:

* **La risposta è scritta in due parti.** Il primo `.print` invia l'intestazione HTTP — la riga di stato, il tipo di contenuto e la riga vuota che chiude le intestazioni. Il secondo invia il corpo. A HTTP non importa se questi arrivino in una scrittura o in parecchie, quindi dividerli tiene separato il testo fisso del protocollo dalla parte che cambia davvero.

* **Il corpo viene da un modello.** `qq:to/END/` è un *heredoc*: una stringa `qq` che corre fino alla riga `END`. Si estende su più righe e interpola `$customer` come qualunque stringa fra virgolette doppie, il che ne fa un piccolo e ordinato strumento di templating per costruire una risposta. (È uno dei [costrutti di quoting](/it/advanced/quoting-constructs) visti prima nel corso.)

Connettiti qualche volta per veder salire il contatore:

```console
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 1.
Thanks for visiting.
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 2.
Thanks for visiting.
```

Gestire le richieste una dopo l'altra così è il genere di server più semplice. Un server di produzione servirebbe anche ogni connessione su un proprio thread o promise, così che un client lento non possa trattenere gli altri — ma il cuore è esattamente questo ciclo: accetta, leggi, rispondi, ripeti.

{% include nav.html %}
