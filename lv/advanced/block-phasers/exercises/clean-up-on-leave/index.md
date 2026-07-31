---
title: Sakopt atstājot
translations_gpt:
---

{% include menu.html %}

## Uzdevums

`LEAVE` īstais spēks ir tajā, ka tas izpildās *lai kā* bloks tiktu atstāts — arī tad, ja tas notiek ar priekšlaicīgu `return`.

Uzrakstiet apakšprogrammu `work`, kuras ķermenis sākas ar fāzeri `LEAVE`, kas izdrukā `Cleanup`. Pēc tam, vēl apakšprogrammas iekšienē, izdrukājiet `Working`, uzreiz izpildiet `return` un aiz `return` ielieciet rindu `say 'never reached'`. Izsauciet apakšprogrammu. Priekšlaicīgais `return` šo pēdējo rindu izlaiž, taču `Cleanup` tomēr tiek izdrukāts.

## Piemērs

Programma izdrukā:

```
Working
Cleanup
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
