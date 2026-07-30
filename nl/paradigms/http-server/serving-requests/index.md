---
title: Veel verzoeken bedienen
translations_gpt:
---

{% include menu.html %}

De server op de vorige pagina handelde één enkel verzoek af en stopte daarna. Een echte server blijft draaien en beantwoordt de ene client na de andere. Wikkel de stappen accepteren-lezen-antwoorden in een `loop` — en omdat de lus de eromheen gedeclareerde variabelen deelt, kun je toestand tussen verzoeken bewaren. Hier telt de server zijn klanten en vertelt hij elk zijn nummer:

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

`.accept` **blokkeert** tot een client verbinding maakt en geeft daarna een verse socket voor dat ene gesprek terug. Omdat `$customer` buiten de lus leeft, overleeft die van het ene verzoek naar het volgende: de eerste bezoeker is klant `1`, de tweede `2`, enzovoort. De lus eindigt uit zichzelf nooit, dus de server blijft draaien tot je hem met Ctrl-C stopt.

Twee details zijn het opmerken waard:

* **Het antwoord wordt in twee delen geschreven.** De eerste `.print` verstuurt de HTTP-header — de statusregel, het contenttype en de lege regel die de headers beëindigt. De tweede verstuurt de body. HTTP kan het niets schelen of die in één of in meerdere schrijfacties aankomen, dus ze splitsen houdt het vaste protocolwerk gescheiden van het deel dat werkelijk verandert.

* **De body komt uit een sjabloon.** `qq:to/END/` is een *heredoc* — een `qq`-string die tot de regel `END` loopt. Hij beslaat meerdere regels en interpoleert `$customer` net als elke string met dubbele aanhalingstekens, wat er een net klein sjabloongereedschap van maakt om een antwoord op te bouwen. (Het is een van de [aanhalingsconstructies](/nl/advanced/quoting-constructs) van eerder in de cursus.)

Maak een paar keer verbinding om de teller te zien klimmen:

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

Verzoeken zo na elkaar afhandelen is de eenvoudigste soort server. Een productieserver zou elke verbinding ook op een eigen thread of promise bedienen, zodat een trage client de andere niet kan ophouden — maar het hart ervan is precies deze lus: accepteren, lezen, antwoorden, herhalen.

{% include nav.html %}
