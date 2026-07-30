---
title: 'Lösung: Schreiben Sie den Pfad groß'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

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

🦋 Du findest den Quellcode in der Datei [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Ausgabe

```
HELLO
```

## Kommentare

1. `.recv` liest die Anfrage. Ihre erste Zeile lautet `GET /hello HTTP/1.0`; `.words[1]` greift `/hello` heraus, und `.substr(1)` lässt den führenden Schrägstrich weg, sodass `hello` bleibt.

1. `.uc` schreibt es groß, und das wird zum Rumpf der Antwort. Die Antwort hängt nun davon ab, wonach der Client gefragt hat — der Server **verarbeitet** die Anfrage und liefert keine feste Zeichenkette.

1. Der ganze Block aus annehmen-lesen-antworten sitzt in einer `loop`, der Server beantwortet also eine Anfrage nach der anderen, statt nach der ersten aufzuhören. Halten Sie ihn mit Strg-C an.

{% include nav.html %}
