---
title: 'Oefening: Als het getal binnen de limieten valt'
---

{% include menu.html %}

## Probleem

Schrijf een programma dat vraagt om drie getallen in te voeren: `$begin`, `$end`, en `$n` en `True` of `False` afdrukt, afhankelijk van of `$n` in het bereik `[$begin, $end)` (inclusief `$begin` maar exclusief `$end`) ligt.

Ga ervan uit dat de ingevoerde getallen voldoen aan de voorwaarde: `$begin < $end + 1`, maar voeg geen code toe om dit te controleren.

## Voorbeeld

De mogelijke uitvoer van het programma voor beide gevallen wordt hieronder getoond:

```console
$ raku number-in-limits.raku
Van (inclusief): 10
Tot (exclusief): 20
Wat is het getal? 15
True

$ raku number-in-limits.raku
Van (inclusief): 10
Tot (exclusief): 20
Wat is het getal? 30
False
```

## Oplossing

✅ [Zie de oplossing](solution)

{% include nav.html %}