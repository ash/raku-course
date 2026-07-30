---
title: Op een verzoek antwoorden
translations_gpt:
---

{% include menu.html %}

Zodra een client verbinding gemaakt heeft, lees je zijn verzoek en stuur je een antwoord. Voor een webbrowser moet het antwoord geldig HTTP zijn: een statusregel, eventuele headers, een lege regel, en daarna de body.

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

Het antwoord weerspiegelt het verzoekformaat dat je aan de clientkant zag. `HTTP/1.0 200 OK` is de statusregel, `Content-Type: text/plain` is een header, de lege regel (`\r\n\r\n`) beëindigt de headers, en `Hello, web!` is de body die de browser toont.

Draai dit programma en benader het daarna vanuit een andere terminal met `curl` (of open `http://127.0.0.1:8080/` in een browser), en het drukt de body regelrecht op het scherm af:

```console
$ curl http://127.0.0.1:8080/
Hello, web!
```

Dit handelt één enkel verzoek af en stopt daarna. Om veel verzoeken te bedienen zou je de stappen `.accept`-lezen-antwoorden in een lus wikkelen, en meestal elke verbinding op een eigen thread of promise afhandelen zodat trage clients de andere niet ophouden. Maar de kern van een webserver is precies dit: een verbinding aannemen, het verzoek lezen, een HTTP-antwoord schrijven.

De [volgende pagina](/nl/paradigms/http-server/serving-requests) doet precies dat — een server die in leven blijft en in een lus het ene verzoek na het andere beantwoordt in plaats van na het eerste te stoppen.

{% include nav.html %}
