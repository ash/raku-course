---
title: 'Oplossing: Aankoop tabel'
---

{% include menu.html %}

De tabel bevat een koptekst (die je eenvoudig afdrukt met een enkele `say`) en een aantal rijen met een vergelijkbare structuur: artikelnaam, artikelprijs, hoeveelheid en de totale kosten van deze artikelen.

Omdat je de volgorde van de rijen wilt behouden, is een array een goede keuze om de items te bewaren. Dus, elke regel van de tabel komt overeen met een enkel element van een array.

Op het tweede niveau kan een record worden opgeslagen in een hash-structuur met een paar benoemde velden: `name`, `price`, en `quantity`.

De rest van het programma bestaat uit het itereren over de items, het berekenen van de totalen en het afdrukken van de tabelrijen.

## Code

Hier is een van de mogelijke oplossingen voor deze taak:

```raku
my @items = [
    {
        name => 'Stoelen',
        price => 20.57,
        quantity => 4,
    },
    {
        name => 'Tafels',
        price => 50.18,
        quantity => 1,
    }
];

say "Artikel\tPrijs\tAantal\tTotaal";
for @items -> $item {
    my $total = $item<price> * $item<quantity>;
    say "$item<name>\t\$$item<price>\t$item<quantity>\t\$$total";
}
```

🦋 Vind het programma in het bestand [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/purchase-table.raku).

## Uitvoer

```console
$ raku exercises/associatives/purchase-table.raku
Artikel	Prijs	Aantal	Totaal
Stoelen	$20.57	4	$82.28
Tafels	$50.18	1	$50.18
```

{% include nav.html %}