---
title: 'Oplossing: Een optioneel teken'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say '-42' ~~ / '-'? \d+ /;
```

🦋 Je kunt de broncode vinden in het bestand [optional-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/optional-sign.raku).

## Uitvoer

```
｢-42｣
```

## Opmerkingen

1. Het deel `'-'?` matcht een optioneel minteken — nul of een daarvan.

1. `\d+` matcht daarna de reeks cijfers. Hetzelfde patroon matcht ook een getal zonder teken, zoals `42`.

{% include nav.html %}
