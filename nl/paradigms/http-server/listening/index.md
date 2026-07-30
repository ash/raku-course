---
title: Op verbindingen luisteren
translations_gpt:
---

{% include menu.html %}

Om als server op te treden, maak je een socket in **luistermodus** met het argument `:listen`, met opgave van het adres en de poort waarop geluisterd moet worden:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);
```

`:localhost('127.0.0.1')` luistert op je eigen machine, en `:localport(8080)` is de poort waarmee clients verbinding moeten maken. De socket wacht nu, maar er is nog geen client aangekomen.

Om de volgende binnenkomende verbinding aan te nemen, roep je `.accept` aan. Dat **blokkeert** tot een client verbinding maakt en geeft daarna een verse socket terug die dat ene gesprek voorstelt:

```raku
my $conn = $listener.accept;
say 'a client connected';
```

De `$listener` blijft naar meer clients luisteren, terwijl `$conn` je kanaal is om met deze bepaalde client te praten. Een echte server roept `.accept` in een lus aan en handelt elke client af zodra die binnenkomt.

> Deze voorbeelden draaien op je eigen machine; maak er vanuit een browser of een ander programma verbinding mee op `127.0.0.1:8080`.

Een server is dus gewoon een omgekeerde socket: in plaats van `:host`/`:port` om uit te bellen, geef je `:listen` met `:localhost`/`:localport` om op inkomende oproepen te wachten.

{% include nav.html %}
