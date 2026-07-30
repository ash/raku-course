---
title: 'Oplossing: Achternaam eerst'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
if 'Grace Hopper' ~~ / (\w+) ' ' (\w+) / {
    say "$1, $0";
}
```

🦋 Je kunt de broncode vinden in het bestand [swap-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/swap-words.raku).

## Uitvoer

```
Hopper, Grace
```

## Opmerkingen

1. De voor- en achternaam worden in `$0` en `$1` gecapturd.

1. Binnen een string met dubbele aanhalingstekens interpoleert elke capture als zijn gematchte tekst. `"$1, $0"` afdrukken zet de achternaam eerst, gevolgd door een letterlijke komma en spatie en dan de voornaam.

{% include nav.html %}
