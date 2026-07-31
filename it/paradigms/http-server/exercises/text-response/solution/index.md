---
title: 'Soluzione: Il percorso in maiuscolo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

loop {
    my $conn = $listener.accept;
    my $request = $conn.recv;

    # "GET /hello HTTP/1.0" — the path is the second word; drop the leading '/'
    my $reply = $request.lines.first.words[1].substr(1).uc;

    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n$reply\n");
    $conn.close;
}
```

🦋 Trova il programma nel file [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Output

```
HELLO
```

## Commenti

1. `.recv` legge la richiesta. La sua prima riga è `GET /hello HTTP/1.0`; `.words[1]` estrae `/hello`, e `.substr(1)` toglie la barra iniziale lasciando `hello`.

1. `.uc` lo rende maiuscolo, e quello diventa il corpo della risposta. La risposta dipende ora da ciò che il client ha chiesto: il server sta **elaborando** la richiesta, non restituendo una stringa fissa.

1. L'intero blocco accetta-leggi-rispondi sta dentro un `loop`, quindi il server risponde a una richiesta dopo l'altra invece di fermarsi dopo la prima. Fermalo con Ctrl-C.

{% include nav.html %}
