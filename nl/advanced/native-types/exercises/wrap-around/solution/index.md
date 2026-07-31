---
title: 'Solution: Rondom wikkelen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my uint8 $u = 250;
$u += 10;
say $u;

my uint8 $v = 0;
$v--;
say $v;
```

🦋 Je kunt de broncode vinden in het bestand [wrap-around.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/wrap-around.raku).

## Uitvoer

```
4
255
```

## Opmerkingen

1. Een `uint8` heeft een bereik van `0` tot `255`, dat zijn 256 verschillende waarden. Rekenkundige bewerkingen erop worden effectief modulo 256 uitgevoerd.

1. `250 + 10` zou `260` zijn, wat niet past. Het wrapt terug en komt uit op `260 - 256 = 4` voorbij de onderkant. Overflow is dus niet beperkt tot het overschrijden van de bovenkant met een — elk resultaat buiten het bereik wordt teruggevouwen.

1. De andere kant op overflowt ook: het verlagen van `0` kan geen `-1` opleveren bij een unsigned type, dus het wrapt naar het maximum, `255`.

{% include nav.html %}
