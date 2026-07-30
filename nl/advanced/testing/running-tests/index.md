---
title: Tests uitvoeren
translations_gpt:
---

{% include menu.html %}

Een enkel testbestand is gewoon een Raku-programma, dus je kunt het direct uitvoeren:

```
raku t/01-basic.rakutest
```

Het toont de TAP-uitvoer op het scherm. Voor meer dan een paar bestanden wil je een _test runner_ die een hele map met tests uitvoert en de resultaten samenvat. De runner van Raku is `prove6`:

```
prove6 t/
```

Dit voert elk testbestand in `t/` uit en rapporteert hoeveel bestanden en tests geslaagd zijn, met een enkel totaalresultaat van slagen/falen aan het einde -- veel makkelijker te lezen dan de ruwe TAP van elk bestand.

Wanneer een distributie een `META6.json` heeft, voert de moduletool de tests voor je uit:

```
zef test .
```

`zef test` vindt de `t/`-map, voert de suite uit en rapporteert het resultaat -- wat precies hetzelfde is als wat automatisch gebeurt voordat een distributie wordt geinstalleerd. Tests dienen dus een dubbel doel: je voert ze uit tijdens het ontwikkelen met `prove6`, en het ecosysteem voert ze uit om een distributie te verifieren voordat iemand het installeert.

> Testbestanden hebben de extensie `.rakutest` (of `.t`) en zijn conventioneel genummerd, zoals `t/01-basic.rakutest`.

{% include nav.html %}
