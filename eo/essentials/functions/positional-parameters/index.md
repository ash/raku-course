---
title: Poziciaj parametroj
---

{% include menu.html %}

La ordo de funkciaj parametroj estas grava. Ekzemple, kreu funkcion kiu kalkulas la diferencon inter du nombroj:

```raku
sub diff($a, $b) { $a - $b }
```

Estas evidente, ke la rezulto de voko `diff(10, 20)` malsamas de `diff(20, 10)`.

Parametroj, kiuj estas listigitaj kiel kom-separata listo kiel en la supra funkcio, estas nomataj _poziciaj_. Ilia signifo dependas de la ordo en kiu la argumentoj estas pasitaj al la funkcio kiam ĝi estas vokita.

{% include nav.html %}