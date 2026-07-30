---
title: 'Oplossing: Allemaal even'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say so all(2, 4, 6) %% 2;
```

🦋 Je kunt de broncode vinden in het bestand [all-even.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/all-even.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. De test doet aan autothreading: `%% 2` wordt op elke waarde toegepast, en de `all`-junctie eist dat elke waarde slaagt.

1. Alle drie de getallen zijn even, dus is het resultaat `True`. Als er ook maar één oneven was, zou het `False` zijn.

{% include nav.html %}
