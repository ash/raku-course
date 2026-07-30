---
title: Ontvangen voorbij het einde
translations_gpt:
---

{% include menu.html %}

Wat gebeurt er als je `.receive` vaker aanroept dan er waarden op te halen zijn? Het antwoord hangt ervan af of het kanaal **gesloten** is.

Neem het voorbeeld met producent en consument van eerder: een achtergrondtaak verstuurt drie waarden en sluit het kanaal. Wat als de consument om een vierde vraagt?

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}

say $c.receive; # 1
say $c.receive; # 2
say $c.receive; # 3
say $c.receive; # one receive too many
```

## Op een gesloten kanaal werpt een extra receive

Sluiten gooit de al in de wachtrij staande waarden niet weg — de drie `.receive`-aanroepen hierboven geven nog steeds `1`, `2` en `3` terug. Maar zodra het kanaal gesloten **en** leeg is, kunnen er nooit meer waarden aankomen, dus laat Raku je niet eeuwig wachten maar werpt het een exceptie:

```
Cannot receive a message on a closed channel
```

De exceptie is `X::Channel::ReceiveOnClosed`. Dat is behulpzaam en niet vervelend: het vertelt de consument ondubbelzinnig dat hij het kanaal leeggehaald heeft. In de praktijk vermijd je haar door met `.list` te consumeren (dat netjes bij de sluiting stopt) of door alleen te lussen zolang er waarden over zijn — beide op de vorige pagina getoond.

## Op een open kanaal blokkeert een extra receive

Als de producent het kanaal nooit sluit, kan `.receive` niet weten of er nog een waarde komt, dus **wacht** het eenvoudigweg:

```raku
my $c = Channel.new;
$c.send(1);
say $c.receive; # 1
say $c.receive; # waits here — the channel is open but empty
```

Het programma blijft bij de tweede `.receive` hangen, omdat er *misschien* nog een waarde verstuurd wordt. Dat is het gevaar waar de vorige pagina voor waarschuwde: vergeet te `.close`-en, en een gewoon "wacht op de volgende waarde" wordt een wachten dat nooit eindigt.

De twee uitkomsten zijn dus op een nuttige manier tegengesteld. Een **gesloten** kanaal faalt snel wanneer het leeg is — je krijgt een exceptie die je kunt zien en vangen. Een **open** kanaal blijft wachten — precies goed zolang een producent nog aan het werk is, maar een stille blokkade als de producent stilletjes gestopt is zonder te sluiten. Het kanaal sluiten is precies wat die stille blokkade verandert in een helder signaal dat de stroom geëindigd is.

{% include nav.html %}
