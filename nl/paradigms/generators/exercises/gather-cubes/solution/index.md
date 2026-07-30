---
title: 'Oplossing: Verzamel de derdemachten'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Je kunt de broncode vinden in het bestand [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Uitvoer

```
[1 8 27 64]
```

## Opmerkingen

1. De `take` draait één keer voor elk getal en levert zijn derdemacht (`$_ ** 3`).

1. Het `gather`-blok evalueert naar de lijst met alle opgenomen waarden.

{% include nav.html %}
