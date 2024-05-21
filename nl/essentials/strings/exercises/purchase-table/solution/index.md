---
title: Oplossing voor 'Aankoop tabel'
---

{% include menu.html %}

## Code

Hier is een mogelijke oplossing:

```raku
my $stoel-prijs = 20.57;
my $stoelen = 4;
my $stoelen-totaal = $stoel-prijs * $stoelen;

my $tafel-prijs = 50.18;
my $tafels = 1;
my $tafels-totaal = $tafel-prijs * $tafels;

say "Item\tPrijs\tN\tTotaal";
say "Stoelen\t\$$stoel-prijs\t$stoelen\t\$$stoelen-totaal";
say "Tafels\t\$$tafel-prijs\t$tafels\t\$$tafels-totaal";
```

Alle getallen zijn hardcoded en opgeslagen in een aantal variabelen. We gebruiken ook de vermenigvuldigingsoperator `*` om het resultaat te berekenen. We zullen meer leren over operators in de volgende secties van deze cursus, maar op dit moment zou de constructie zoals `$stoel-prijs * $stoelen` geen vragen moeten oproepen.

De drie regels die de uitvoer genereren, printen de drie regels van de tabel, inclusief de kop. Let op hoe de kolommen worden gescheiden door de tabkarakters `\t`. In de datarijen zien we ook een geëscapet dollarteken: `\$` evenals verschillende variabelen die we willen interpoleren.

🦋 Je kunt de broncode vinden in het bestand [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/purchase-table.raku).

## Uitvoer

Voer het programma uit en zie hoe het de tabel afdrukt:

```
$ raku exercises/strings/purchase-table.raku
Item    Prijs   N      Totaal
Stoelen $20.57  4      $82.28
Tafels  $50.18  1      $50.18
```

## Opmerkingen

Heb je de streepjes in de namen van de variabelen zoals `$stoel-prijs` of `$tafels-totaal` opgemerkt? Dit is een perfect acceptabele manier om variabelen te benoemen in Raku.

Laat je niet verwarren door de twee aangrenzende dollartekens. Raku leest ze afzonderlijk. Bijvoorbeeld, in de substring `\$$prijs`, wordt het eerste dollarteken geëscapet en vertegenwoordigt het zichzelf, terwijl het tweede deel uitmaakt van de variabelenaam `$prijs`.

Alle strings zijn geciteerd in dubbele aanhalingstekens om interpolatie van de variabelen en de speciale tekens mogelijk te maken.

Laten we terugkeren naar deze taak nadat we vertrouwd zijn geraakt met arrays en hashes.

{% include nav.html %}