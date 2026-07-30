---
title: 'Oplossing: Uitvoer en fout'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @data = 3, 5, 7;

my $sum = 0;
for @data -> $n {
    $sum += $n;
    $*ERR.say("running total: $sum");
}

$*OUT.say($sum);
```

🦋 Je kunt de broncode vinden in het bestand [output-and-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/output-and-error.raku).

## Uitvoer

Op het scherm verschijnen beide stromen — de tussenstanden, dan het eindresultaat:

```
running total: 3
running total: 8
running total: 15
15
```

Als de standaardfout weggegooid wordt, blijft alleen de echte uitvoer over:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Opmerkingen

1. `$*OUT` en `$*ERR` zijn de handles voor de standaarduitvoer en de standaardfout. Elk heeft een eigen methode `say`.

1. Elke ronde van de lus telt het volgende getal op en schrijft de tussenstand naar `$*ERR`; alleen de eindsom gaat naar `$*OUT`. Op het scherm lijken de voortgang en het resultaat op elkaar, maar ze reizen door verschillende stromen — en daarom laat de standaardfout wegleiden met `2>/dev/null` alleen de afsluitende `15` over.

{% include nav.html %}
