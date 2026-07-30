---
title: 'Solution: Samenvoegen met een dubbele punt'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say <a b c>.reverse.join: '-';
```

🦋 De broncode is te vinden in het bestand [colon-join.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-join.raku).

## Uitvoer

```
c-b-a
```

## Opmerkingen

1. `.reverse` behoudt zijn gewone vorm omdat het in het midden van de keten staat. `join` komt als laatste, dus het kan de dubbele punt gebruiken en `'-'` doorgeven, precies zoals `join('-')` zou doen.

1. De omgekeerde lijst `c, b, a` wordt vervolgens samengevoegd met streepjes, wat `c-b-a` oplevert. De dubbele-puntvorm werkt met gewone waarden, niet alleen met blokken.

{% include nav.html %}
