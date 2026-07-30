---
title: 'Solution: Gekoppelde vergelijking'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say 0 <= 73 <= 100;
```

🦋 Je kunt de broncode vinden in het bestand [chained-comparison.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/chained-comparison.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. Vergelijkingsoperatoren kunnen geschakeld worden, dus `0 <= 73 <= 100` leest als "0 is hoogstens 73, en 73 is hoogstens 100". De operator `<=` staat de eindpunten toe, dus een score van precies `0` of `100` zou ook als geldig tellen.

1. Beide delen zijn waar, dus de hele expressie is `True`. Merk op dat de middelste waarde `73` slechts een keer wordt geschreven, ook al wordt deze met beide buren vergeleken.

1. Zonder de schakelingsmogelijkheid zou je beide vergelijkingen moeten uitschrijven en ze met `&&` moeten verbinden, waarbij de middelste waarde herhaald wordt: `0 <= 73 && 73 <= 100`. De geschakelde vorm zegt hetzelfde op een beknoptere manier.

{% include nav.html %}
