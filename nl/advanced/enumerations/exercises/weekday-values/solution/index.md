---
title: 'Solution: Weekdagnummers'
translations_gpt: Dutch
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Je kunt de broncode vinden in het bestand [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Uitvoer

```
Fri
Mon
```

## Opmerkingen

1. Door de constanten als paren te schrijven kun je de getallen kiezen, hier beginnend vanaf `1`.

1. Het enum-type aanroepen als `Day(5)` voert de omgekeerde opzoeking uit: het vindt de constante waarvan de waarde `5` is, namelijk `Fri`. Op dezelfde manier geeft `Day(1)` `Mon`. Dit is het omgekeerde van `Fri.value`, wat van de naam naar het getal zou gaan.

{% include nav.html %}
