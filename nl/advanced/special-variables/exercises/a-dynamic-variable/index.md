---
title: Een dynamische variabele
---

{% include menu.html %}

## Probleem

Een dynamische variabele — geschreven met de `*`-twigil — wordt opgezocht door naar buiten te zoeken via de call stack, niet via lexicale scope. De waarde die een subroutine ziet hangt dus af van wie deze heeft aangeroepen, waardoor een blok de code die het aanroept onder een andere identiteit kan laten draaien.

1. Declareer een dynamische variabele `$*user` met de waarde `'guest'`.
2. Schrijf een subroutine `whoami` die `running as ` print gevolgd door de huidige `$*user` (bijvoorbeeld `running as guest`). Deze moet `$*user` direct uitlezen — zonder parameters.
3. Roep `whoami` eenmaal aan op het bovenste niveau: het rapporteert `guest`.
4. Roep vervolgens binnen een blok dat `$*user` opnieuw declareert als `'admin'` dezelfde `whoami` nogmaals aan: nu rapporteert het `admin`.

## Voorbeeld

Het programma print:

```
running as guest
running as admin
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
