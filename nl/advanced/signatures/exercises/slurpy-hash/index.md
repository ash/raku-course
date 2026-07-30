---
title: Slurpy benoemde argumenten
translations_gpt:
---

{% include menu.html %}

## Probleem

Schrijf een subroutine `describe` die een verplichte positionele naam verwacht en vervolgens een willekeurig aantal benoemde argumenten verzamelt in een slurpy hash (`*%opts`). De subroutine moet een string teruggeven in de vorm `naam: sleutel=waarde, sleutel=waarde, ...`, waarbij elke optie wordt weergegeven met de sleutels in alfabetische volgorde.

Roep de subroutine aan als `describe('Anna', colour => 'red', size => 5)` en druk het resultaat af.

## Voorbeeld

Het programma drukt af:

```
Anna: colour=red, size=5
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
