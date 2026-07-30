---
title: 'Solution: Gretige evaluatie afdwingen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say (1 .. Inf).is-lazy;
say (eager 1..3).is-lazy;
say (lazy 1..3).is-lazy;
```

🦋 Je kunt de broncode vinden in het bestand [force-eager.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/force-eager.raku).

## Uitvoer

```
True
False
True
```

## Opmerkingen

1. Een range tot `Inf` kan niet in een keer worden berekend, dus deze is lazy: `.is-lazy` geeft `True`.

1. Het prefix `eager` dwingt een lijst af om onmiddellijk te worden geproduceerd, dus het resultaat is niet langer lazy — `.is-lazy` geeft `False`. Dit is het directe tegenovergestelde van het markeren van een lijst als `lazy`.

1. Pas `eager` niet toe op een onbegrensde range: `eager 1 .. Inf` probeert elk element in een keer te berekenen, waardoor het programma simpelweg vastloopt en steeds meer geheugen verbruikt totdat het wordt afgebroken. `eager` is alleen veilig op lijsten waarvan je weet dat ze eindig zijn.

1. Het omgekeerde werkt ook: `lazy 1..3` markeert zelfs een korte, eindige range als lazy, dus `.is-lazy` geeft `True`. Het prefix stelt de laziness-vlag in ongeacht hoe klein de lijst is — deze hoeft niet oneindig te zijn om lazy te zijn.

{% include nav.html %}
