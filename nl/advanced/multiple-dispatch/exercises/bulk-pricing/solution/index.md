---
title: 'Solution: Staffelkorting'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
multi sub price(Int $qty where $qty >= 10) { say 'bulk price' }
multi sub price(Int $qty)                  { say 'normal price' }

price(3);
price(25);
```

🦋 Je kunt de broncode vinden in het bestand [bulk-pricing.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/bulk-pricing.raku).

## Uitvoer

```
normal price
bulk price
```

## Opmerkingen

1. De eerste kandidaat heeft een `where`-clausule die alleen hoeveelheden van 10 of meer accepteert, dus de aanroep `price(25)` wordt daarnaar gedispatcht.

1. De tweede kandidaat heeft geen voorwaarde en fungeert als vangnet, dus `price(3)` gaat daarheen.

{% include nav.html %}
