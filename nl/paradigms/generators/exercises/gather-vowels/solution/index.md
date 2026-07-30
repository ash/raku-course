---
title: 'Oplossing: Verzamelen met een voorwaarde'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Je kunt de broncode vinden in het bestand [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Uitvoer

```
[e u a i o]
```

## Opmerkingen

1. `.comb` splitst het woord in afzonderlijke tekens die de lus op volgorde langsgaat.

1. `take` bewaart een teken alleen wanneer het op de klinkerklasse matcht, wat de klinkers in de volgorde geeft waarin ze voorkomen.

{% include nav.html %}
