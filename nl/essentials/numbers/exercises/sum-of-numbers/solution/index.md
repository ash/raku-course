---
title: Oplossing voor ‘Som van getallen’
---

{% include menu.html %}

Hier is de oplossing voor het probleem.

## Code

```raku
my $a = prompt 'Voer getal A in: ';
my $b = prompt 'Voer getal B in: ';
my $c = prompt 'Voer getal C in: ';

my $som = $a + $b + $c;

say "De som van de getallen is $som.";
```

🦋 Je kunt de volledige code vinden in het bestand [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum-of-numbers.raku).

## Uitvoer

Voer het programma een paar keer uit en bevestig dat het werkt met getallen van verschillende soorten.

```console
$ raku exercises/numbers/sum-of-numbers.raku
Voer getal A in: 1.2
Voer getal B in: -3.4
Voer getal C in: 45
De som van de getallen is 42.8.
```

## Opmerkingen

Merk op dat we direct de waarde gebruiken die door de `prompt` routine wordt geretourneerd. Dat kan problemen veroorzaken als de gebruiker een string invoert die geen waarde vertegenwoordigt. We kunnen het programma in de toekomst verbeteren nadat we meer hebben geleerd over uitzonderingen.

{% include nav.html %}