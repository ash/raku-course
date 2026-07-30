---
title: Versturen en ontvangen
translations_gpt:
---

{% include menu.html %}

Maak een kanaal met `Channel.new`. Zet er waarden in met `.send`, en haal ze eruit met `.receive`:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
say $c.receive; # 1
say $c.receive; # 2
```

Een kanaal is een **wachtrij**: waarden komen er in dezelfde volgorde uit als ze erin gingen — first in, first out. Dus de eerste `.receive` geeft `1` terug, de waarde die als eerste verstuurd is.

De bedoeling van een kanaal is dat versturen en ontvangen veilig tegelijk vanuit **verschillende threads** kunnen. Een producent kan blijven versturen terwijl een consument blijft ontvangen, en Raku zorgt ervoor dat geen waarde verloren gaat of gedupliceerd wordt:

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}
say $c.receive; # 1
```

Hier verstuurt een achtergrondtaak `1, 2, 3`; het hoofdprogramma ontvangt. `.receive` wacht als het kanaal even leeg is, dus de consument loopt de producent nooit vooruit.

{% include nav.html %}
