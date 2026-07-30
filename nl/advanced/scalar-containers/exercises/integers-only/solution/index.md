---
title: 'Solution: Alleen gehele getallen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my Int $cars;

$cars = 250.7.Int;
say $cars;
say $cars.WHAT;
```

🦋 Je kunt de broncode vinden in het bestand [integers-only.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/integers-only.raku).

## Uitvoer

```
250
(Int)
```

## Opmerkingen

1. De `Int`-typebeperking in `my Int $cars` zorgt ervoor dat de container elke waarde weigert die geen geheel getal is. Een directe toewijzing van `250.7` (een `Rat`) zou een compile-time fout opleveren.

1. Het aanroepen van `.Int` op de rationele waarde `250.7` converteert deze naar het gehele getal `250` door het decimale deel weg te laten. De geconverteerde waarde past in de container. Verwar dit gedrag niet met afronden.

1. De `.WHAT`-pseudomethode bevestigt dat de waarde die in de container is opgeslagen van het type `Int` is.

{% include nav.html %}
