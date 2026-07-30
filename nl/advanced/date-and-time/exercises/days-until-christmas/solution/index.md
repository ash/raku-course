---
title: 'Solution: Weken tot Kerstmis'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Je kunt de broncode vinden in het bestand [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Uitvoer

```
25 weeks and 6 days
```

## Opmerkingen

1. Het aftrekken van de ene `Date` van de andere geeft het aantal dagen ertussen — hier `181` — dus handmatig de dagen in elke maand tellen is niet nodig. De latere datum wordt als eerste geschreven, zodat het resultaat positief is.

1. Gehele deling `div` geeft het aantal hele weken (`181 div 7` is `25`), en de modulo-operator `%` geeft de overgebleven dagen (`181 % 7` is `6`).

{% include nav.html %}
