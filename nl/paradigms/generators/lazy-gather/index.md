---
title: Luie gather
translations_gpt:
---

{% include menu.html %}

Een `gather`-blok is _lui_: het draait niet in één keer. Het produceert waarden pas zodra ze eruit gehaald worden, wat betekent dat een `gather` een **eindeloze** reeks kan beschrijven en toch bruikbaar blijft — je stopt eenvoudigweg met waarden opnemen zodra je er genoeg hebt.

Het addertje is dat je het resultaat lui moet houden. Het in een gewone `@array` bewaren zou proberen elke waarde in één keer te verzamelen, en voor een eindeloze reeks eindigt dat nooit. Bewaar de reeks in plaats daarvan in een scalair (waar ze een luie `Seq` blijft) en haal er een plak uit:

```raku
my $naturals = gather {
    my $n = 1;
    loop {
        take $n++;
    }
}

say $naturals[^5]; # (1 2 3 4 5)
```

De `loop` eindigt nooit, maar er worden ooit slechts vijf waarden geproduceerd, want dat is alles waar we met `[^5]` om vroegen. Je kunt ook vooraan waarden weghalen met `.head`:

```raku
say (gather { my $n = 1; loop { take $n++ } }).head(3); # (1 2 3)
```

Luiheid is wat `gather` oneindige stromen veilig laat modelleren: er wordt niets berekend tot het nodig is, en je neemt precies zoveel als je wilt.

{% include nav.html %}
