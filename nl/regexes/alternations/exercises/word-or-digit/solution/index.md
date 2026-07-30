---
title: 'Oplossing: Woord of cijfer'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Je kunt de broncode vinden in het bestand [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Uitvoer

```
｢5｣
```

## Opmerkingen

1. De alternatie mengt een letterlijke waarde, `cat`, met een tekenklasse, `\d`. Het patroon matcht welk alternatief er ook als eerste in de string gevonden wordt.

1. Er zit geen `cat` in `item 5`, maar wel een cijfer, dus matcht `\d` de `5`.

{% include nav.html %}
