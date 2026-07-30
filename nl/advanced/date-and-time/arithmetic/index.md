---
title: Datumrekenen
---

{% include menu.html %}

Datums ondersteunen rekenkundige bewerkingen, waardoor veel alledaagse berekeningen eenvoudig worden.

Een geheel getal optellen bij een datum verschuift deze dat aantal dagen vooruit. Het resultaat is een nieuwe datum, waarbij de maand en het jaar automatisch worden aangepast:

```raku
say Date.new(2026, 6, 27) + 7; # 2026-07-04
```

De ene datum van de andere aftrekken geeft het aantal dagen ertussen:

```raku
say Date.new(2026, 7, 4) - Date.new(2026, 6, 27); # 7
```

Voor grotere stappen accepteren de methoden `later` en `earlier` benoemde argumenten zoals `:days`, `:months` of `:years`:

```raku
say Date.new(2026, 6, 27).later(:days(10));    # 2026-07-07
say Date.new(2026, 6, 27).earlier(:months(2)); # 2026-04-27
```

Deze methoden houden de berekening correct over maand- en jaargrenzen heen, zodat je je nooit zorgen hoeft te maken over hoeveel dagen een bepaalde maand heeft.

{% include nav.html %}
