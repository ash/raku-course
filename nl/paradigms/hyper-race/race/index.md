---
title: Ongeordend parallellisme met race
translations_gpt:
---

{% include menu.html %}

`.race` parallelliseert op dezelfde manier als `.hyper`, met één verschil: het belooft **niet** de resultaten op volgorde terug te geven. Welke worker het eerst klaar is, levert zijn resultaat het eerst.

```raku
say (1..10).race.map(* ** 2).sort; # (1 4 9 16 25 36 49 64 81 100)
```

De kwadraten komen in een onvoorspelbare volgorde terug, dus de `.sort` staat er om de uitvoer deterministisch te maken. Hadden we zonder sorteren afgedrukt, dan zouden alle getallen aanwezig maar mogelijk door elkaar geschud zijn.

Omdat het de resultaten niet op volgorde hoeft te houden, kan `.race` iets minder overhead hebben dan `.hyper`. De afweging is eenvoudig:

* gebruik `.hyper` wanneer de **volgorde** van de resultaten ertoe doet;
* gebruik `.race` wanneer dat **niet** zo is — bijvoorbeeld wanneer je de resultaten gaat optellen, tellen of anderszins op een van volgorde onafhankelijke manier gaat combineren.

```raku
say (1..100).race.map(* * 2).sum; # 10100
```

Optellen is van volgorde onafhankelijk, dus `.race` is hier een prima keuze en geeft dezelfde `10100`. Beide methoden gaan over hetzelfde idee — laat onafhankelijk werk tegelijk lopen — en je kiest ertussen op grond van de vraag of de volgorde je iets kan schelen.

{% include nav.html %}
