---
title: 'Oplossing: Filteren met een blok'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Je kunt de broncode vinden in het bestand [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Uitvoer

```
5
```

## Opmerkingen

1. `grep` neemt het blok `* > 5` aan en houdt de getallen waarvoor het waar is: `6, 7, 8, 9, 10`.

1. `.elems` telt ze, wat `5` geeft.

{% include nav.html %}
