---
title: 'Oplossing: Een klinker'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'Hello' ~~ / <[aeiou]> /;
```

🦋 Je kunt de broncode vinden in het bestand [a-vowel.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/a-vowel.raku).

## Uitvoer

```
｢e｣
```

## Opmerkingen

1. De klasse `<[aeiou]>` somt de vijf klinkers op; ze matcht degene die als eerste voorkomt.

1. In `Hello` zit de letter `H` niet in de klasse, dus begint de match bij `e`.

{% include nav.html %}
