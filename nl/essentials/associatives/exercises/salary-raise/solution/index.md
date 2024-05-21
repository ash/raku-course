---
title: 'Oplossing: Salarisverhoging'
---

{% include menu.html %}

Het programma moet een van de waarden van de gegeven hash bijwerken. Het toewijzen van een nieuwe waarde verschilt niet veel van het instellen van een nieuwe waarde van een scalair variabele.

## Code

Hier is de oplossing:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;

my $raise = 5; # in procenten

%employee<salary> *= (1 + $raise / 100);
say "Nieuw salaris van %employee<full-name>: %employee<salary>";
```

🦋 Vind het programma in het bestand [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/salary-raise.raku).

## Uitvoer

Bij het uitvoeren van het programma, zorg ervoor dat je geldige berekeningen hebt gemaakt en het aantal procenten correct hebt omgezet.

```console
$ raku exercises/associatives/salary-raise.raku
Nieuw salaris van Eliza Vents: 3150
```

{% include nav.html %}