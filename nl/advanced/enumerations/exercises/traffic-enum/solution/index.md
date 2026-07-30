---
title: 'Solution: Verkeerslichten'
translations_gpt: Dutch
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 Je kunt de broncode vinden in het bestand [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Uitvoer

```
red is 0
amber is 1
green is 2
```

## Opmerkingen

1. `my Light $current` is een gewone, veranderbare variabele — alleen beperkt tot het type `Light`. Het toewijzen van de volgende constante schakelt het licht door, en het getal volgt elke keer de naam: `0`, `1`, `2`.

1. `$current++` lijkt alsof het vanzelf naar het volgende licht zou moeten gaan, maar het mislukt met een typecontrole-fout. `++` behandelt de constante als een gewoon getal en geeft een `Int` terug (`red` wordt `1`), en een `Int` past niet meer in het type `Light`. Daarom verplaats je het licht door de volgende constante toe te wijzen, zoals hierboven.

1. De typebeperking geldt voor elke toewijzing, niet alleen de eerste. `$current` accepteert `red`, `amber` of `green`, maar het toewijzen van iets dat geen `Light` is — een kaal getal of een tekenreeks — zou een typecontrole-fout opleveren.

{% include nav.html %}
