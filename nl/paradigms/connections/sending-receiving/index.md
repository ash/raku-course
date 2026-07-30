---
title: Versturen en ontvangen
translations_gpt:
---

{% include menu.html %}

Zodra een socket open is, wissel je er gegevens door uit. Verstuur tekst met `.print`, en lees wat terugkomt met `.recv`:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));

$conn.print("GET / HTTP/1.0\r\nHost: raku.org\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

Dit verstuurt een minimaal HTTP-verzoek en leest het antwoord van de server in `$response`. De eerste regel van een antwoord van een webserver is haar statusregel.

> Dit voorbeeld heeft een werkende netwerkverbinding nodig. Bij het draaien drukt het de statusregel van het antwoord af. Omdat `raku.org` gewone HTTP naar de beveiligde HTTPS-site omleidt, is die regel een omleiding, zoals `HTTP/1.1 308 Permanent Redirect`, en niet `200 OK`. Het bijzondere domein `example.com` leidt niet om, dus hetzelfde verzoek daarheen richten drukt gewoon `HTTP/1.1 200 OK` af.

Twee details doen ertoe wanneer je met servers praat. Ten eerste scheiden netwerkprotocollen regels doorgaans met `\r\n` (carriage return plus newline) en niet met een kale `\n`, en daarom is het verzoek met `\r\n` geschreven. Ten tweede geeft `.recv` terug welke gegevens tot dusver binnengekomen zijn; voor grotere antwoorden lees je in een lus tot de verbinding sluit.

Bytes versturen en bytes ontvangen is alles wat een socket werkelijk doet. Al het andere — HTTP, en de gereedschappen op hoger niveau in de komende secties — is daarbovenop gebouwd.

{% include nav.html %}
