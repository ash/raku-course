---
title: Een socket openen
translations_gpt:
---

{% include menu.html %}

Een _socket_ is een verbinding tussen twee programma's over een netwerk. Raku's kernklasse voor TCP-sockets is `IO::Socket::INET`, en je hoeft niets extra's te installeren om haar te gebruiken.

Om verbinding met een server op afstand te maken, maak je een socket met de host en poort die je wilt bereiken:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));
say 'connected';
$conn.close;
```

`IO::Socket::INET.new` opent de verbinding meteen. Poort `80` is de standaardpoort voor HTTP, dus dit maakt verbinding met de webserver op `raku.org`. Wanneer je klaar bent, geeft `.close` de verbinding vrij.

> Dit voorbeeld heeft een werkende netwerkverbinding nodig om te draaien. Wanneer de verbinding lukt, drukt het `connected` af.

Dezelfde klasse wordt in twee modi gebruikt: als **client**, die zoals hier naar een server uitbelt, en als **server**, die op binnenkomende verbindingen luistert (wat je later ziet). Voor nu is het idee om te onthouden dat `IO::Socket::INET.new(:host, :port)` je een levend tweewegkanaal naar een andere machine geeft.

{% include nav.html %}
