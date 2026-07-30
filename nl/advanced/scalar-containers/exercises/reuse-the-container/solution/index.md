---
title: 'Solution: Getypt of ongetypt'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $untyped;
my Int $typed;

dd $untyped;
dd $typed;

$untyped = 42;
$typed = 42;

dd $untyped;
dd $typed;
```

🦋 Je kunt de broncode vinden in het bestand [reuse-the-container.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/reuse-the-container.raku).

## Uitvoer

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Opmerkingen

1. `dd` beschrijft de twee containers op een verschillende manier. Voor de container zonder type drukt het alleen `$untyped` af, terwijl het voor de container met type het gedeclareerde type als voorvoegsel plaatst: `Int $typed`. Dat voorvoegsel is precies het verschil dat een gedeclareerd type maakt.

1. De lege waarden verschillen ook. Een container zonder type begint met de ongedefinieerde basiswaarde `Any`, terwijl een container met type begint met de ongedefinieerde waarde van *zijn* type, `Int`.

1. Nadat aan beide `42` is toegewezen, zien de waarden er hetzelfde uit, maar `$typed` draagt nog steeds zijn type en zou een niet-gehele waarde weigeren — in tegenstelling tot `$untyped`, die alles accepteert.

{% include nav.html %}
