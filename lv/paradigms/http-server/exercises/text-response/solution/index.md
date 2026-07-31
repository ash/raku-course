---
title: 'Risinājums: Ceļš lielajiem burtiem'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

loop {
    my $conn = $listener.accept;
    my $request = $conn.recv;

    # "GET /hello HTTP/1.0" — ceļš ir otrais vārds; atmetam sākuma '/'
    my $reply = $request.lines.first.words[1].substr(1).uc;

    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n$reply\n");
    $conn.close;
}
```

🦋 Atrodiet programmu failā [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Izvade

```
HELLO
```

## Komentāri

1. `.recv` nolasa pieprasījumu. Tā pirmā rinda ir `GET /hello HTTP/1.0`; `.words[1]` izķer `/hello`, un `.substr(1)` atmet sākuma slīpsvītru, atstājot `hello`.

1. `.uc` to pārvērš lielajos burtos, un tas kļūst par atbildes ķermeni. Atbilde tagad ir atkarīga no tā, ko klients prasīja, — serveris pieprasījumu **apstrādā**, nevis atgriež nemainīgu virkni.

1. Viss pieņemšanas–nolasīšanas–atbildēšanas bloks atrodas `loop` iekšienē, tāpēc serveris atbild uz vienu pieprasījumu pēc otra, nevis apstājas pēc pirmā. Apturiet to ar Ctrl-C.

{% include nav.html %}
