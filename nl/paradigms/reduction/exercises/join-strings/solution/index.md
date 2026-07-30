---
title: 'Oplossing: Plak de strings aaneen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say [~] '2', '0', '2', '5';
```

🦋 Je kunt de broncode vinden in het bestand [join-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/join-strings.raku).

## Uitvoer

```
2025
```

## Opmerkingen

1. `[~]` voegt de plakoperator `~` tussen de strings in.

1. `'2' ~ '0' ~ '2' ~ '5'` levert de enkele string `2025` op.

{% include nav.html %}
