---
title: 'Oplossing: Hyper met een filter'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say (1..20).hyper.grep(* > 10).map(*²);
```

🦋 Je kunt de broncode vinden in het bestand [hyper-filter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-filter.raku).

## Uitvoer

```
(121 144 169 196 225 256 289 324 361 400)
```

## Opmerkingen

1. `*²` is slechts Raku's schrijfwijze met superscript voor `* ** 2`: de `²` is een postfix-machtsoperator, dus `*²` is een `WhateverCode` die haar argument kwadrateert. Schrijf `* ** 2` als je dat liever hebt.

1. `.hyper` parallelliseert de hele keten — de `grep` die de getallen boven `10` houdt en de `map` die ze kwadrateert — met behoud van de volgorde.

1. Omdat de volgorde bewaard blijft, komen de kwadraten in dezelfde volgorde terug als hun invoer (`11²`, `12²`, …, `20²`), wat `(121 144 169 196 225 256 289 324 361 400)` geeft.

{% include nav.html %}
