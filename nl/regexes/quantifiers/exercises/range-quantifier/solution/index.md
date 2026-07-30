---
title: 'Oplossing: Twee tot vier'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 Je kunt de broncode vinden in het bestand [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Uitvoer

```
｢abcd｣
```

## Opmerkingen

1. `\w ** 2..4` matcht van twee tot vier woordtekens.

1. Gulzig als hij is, neemt hij er zoveel als het bereik toelaat — vier — dus is de match `abcd`.

{% include nav.html %}
