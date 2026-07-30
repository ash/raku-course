---
title: 'Oplossing: Versturen en ontvangen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Je kunt de broncode vinden in het bestand [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Uitvoer

```
HTTP/1.1 200 OK
```

## Opmerkingen

1. `.print` verstuurt het verzoek; de protocolregels eindigen op `\r\n`. Een `HEAD`-verzoek vraagt de server alleen om de statusregel en de headers, dus is het antwoord klein.

1. `.recv` leest het antwoord, en `.lines.first` neemt de eerste regel ervan — de HTTP-statusregel.

{% include nav.html %}
