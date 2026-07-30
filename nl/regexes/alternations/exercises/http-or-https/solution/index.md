---
title: 'Oplossing: http of https'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'https://example' ~~ / http | https /;
```

🦋 Je kunt de broncode vinden in het bestand [http-or-https.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/http-or-https.raku).

## Uitvoer

```
｢https｣
```

## Opmerkingen

1. Zowel `http` als `https` zou aan het begin kunnen matchen, maar `|` gebruikt longest-token matching.

1. Dus het langere `https` wint, ook al staat `http` eerst geschreven.

## Een alternatieve oplossing

De twee woorden verschillen alleen door een afsluitende `s`, dus in plaats van een alternatie kun je die `s` optioneel maken met de kwantor `?`:

```raku
say 'https://example' ~~ / https? /; # ｢https｣
```

De `?` bindt alleen aan het atoom er direct voor — de `s` — niet aan het hele woord, dus lees je `https?` als `http` gevolgd door een optionele `s`. Dat ene patroon matcht zowel `http` als `https`, en gulzig als het is neemt het de `s` wanneer die er is.

{% include nav.html %}
