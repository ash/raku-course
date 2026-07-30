---
title: 'Solution: Dag van de week'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Je kunt de broncode vinden in het bestand [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. `day-of-week` nummert de dagen van `1` (maandag) tot `7` (zondag), dus de twee weekenddagen zijn precies de nummers `6` en `7`.

1. De test `>= 6` is `True` voor zowel zaterdag als zondag en `False` voor elke doordeweekse dag. 14 februari 2027 is een zondag (`7`), dus het programma print `True`.

{% include nav.html %}
