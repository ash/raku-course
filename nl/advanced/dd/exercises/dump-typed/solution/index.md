---
title: 'Solution: Een getypte variabele dumpen'
translations_gpt: De oplossing van 'Een getypeerde variabele dumpen'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my Int $n = 42;
dd $n;
```

🦋 Je kunt de broncode vinden in het bestand [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Uitvoer

```
Int $n = 42
```

## Opmerkingen

1. Omdat de variabele een gedeclareerd type heeft, toont `dd` dat type voor de naam: `Int $n = 42`.

1. Een variabele zonder type zou worden gedumpt als gewoon `$n = 42`, zonder het type.

{% include nav.html %}
