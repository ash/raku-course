---
title: Parametri positionis
---

{% include menu.html %}

Ordo parametrorum functionis est maximus. Exempli gratia, crea functionem quae differentiam inter duo numeros computat:

```raku
sub diff($a, $b) { $a - $b }
```

Manifestum est quod eventus vocandi `diff(10, 20)` differt ab `diff(20, 10)`.

Parametri qui ut comma-separata lista enumerantur sicut in functione supra vocantur _positionales_. Eorum significatio pendet ex ordine quo argumenta ad functionem vocandam traduntur.

{% include nav.html %}