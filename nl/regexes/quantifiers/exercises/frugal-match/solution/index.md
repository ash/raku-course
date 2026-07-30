---
title: 'Oplossing: Een zuinige match'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'say "hi" and "bye"' ~~ / '"' .+? '"' /;
```

🦋 Je kunt de broncode vinden in het bestand [frugal-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/frugal-match.raku).

## Uitvoer

```
｢"hi"｣
```

## Opmerkingen

1. De `?` achter `.+` maakt de kwantor zuinig, dus matcht hij zo weinig mogelijk tekens.

1. Hij stopt daarom bij de eerste sluitende `"` en vangt alleen `"hi"`. Een gulzige `.+` zou helemaal tot de laatste `"` doorgelopen zijn en `"hi" and "bye"` gematcht hebben.

{% include nav.html %}
