---
title: 'Solution: De datastructuur dumpen'
translations_gpt: De oplossing van 'De datastructuur dumpen'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Je kunt de broncode vinden in het bestand [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Uitvoer

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Opmerkingen

1. `dd @data` toont een codeachtige weergave van de inhoud van de array. Dit gaat naar de standaardfoutstroom.

1. De `.raku`-methode geeft dezelfde weergave terug als een tekenreeks, die vervolgens in een normaal bericht wordt ingevoegd met code-interpolatie en met `say` naar de standaarduitvoer wordt gestuurd.

1. De twee regels zien er hier hetzelfde uit, maar ze gaan via verschillende uitvoerstromen: de eerste komt van `dd` (standaardfout), de tweede van `say` (standaarduitvoer). Vergelijk het volgende:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
