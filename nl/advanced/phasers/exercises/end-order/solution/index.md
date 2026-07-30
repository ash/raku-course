---
title: 'Solution: De volgorde van ENDs'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Je kunt de broncode vinden in het bestand [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Uitvoer

```
body
second END
first END
```

## Opmerkingen

1. Beide `END`-phasers worden uitgevoerd na de hoofdcode, dus `body` wordt als eerste afgedrukt.

1. Meerdere `END`-phasers worden in last-in, first-out volgorde uitgevoerd: de `second END`, die later is gedeclareerd, wordt uitgevoerd vóór de `first END`. Dit weerspiegelt hoe opruimen meestal de meest recente opstelling als eerste ongedaan moet maken.

{% include nav.html %}
