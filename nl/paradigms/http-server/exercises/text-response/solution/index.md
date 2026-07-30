---
title: 'Oplossing: Zet het pad in hoofdletters'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

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

🦋 Je kunt de broncode vinden in het bestand [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Uitvoer

```
HELLO
```

## Opmerkingen

1. `.recv` leest het verzoek. De eerste regel ervan is `GET /hello HTTP/1.0`; `.words[1]` vist `/hello` eruit, en `.substr(1)` laat de voorafgaande schuine streep vallen zodat `hello` overblijft.

1. `.uc` zet het in hoofdletters, en dat wordt de body van het antwoord. Het antwoord hangt nu af van wat de client vroeg — de server **verwerkt** het verzoek en geeft geen vaste string terug.

1. Het hele blok accepteren-lezen-antwoorden zit in een `loop`, dus beantwoordt de server het ene verzoek na het andere in plaats van na het eerste te stoppen. Stop hem met Ctrl-C.

{% include nav.html %}
