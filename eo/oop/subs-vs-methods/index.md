---
title: Subprogramoj kaj metodoj
translations_gpt:
---

{% include menu.html %}

Vi nun havas du manierojn paki pecon de konduto: _subrutinon_ kaj _metodon_. Ili aspektas similaj sed estas uzataj malsame.

Subrutino staras memstare. Vi vokas ĝin per ĝia nomo kaj transdonas al ĝi ĉion, kion ĝi bezonas, kiel argumentojn:

```raku
sub area-of($radius) {
    π * $radius * $radius;
}

say area-of(2); # 12.566370614359172
```

Metodo apartenas al klaso kaj estas vokata sur objekto per la punkto. Ĝi povas uzi la proprajn datumojn de la objekto tra `self` kaj la atributaj atingiloj, do vi ne transdonas tiujn datumojn:

```raku
class Circle {
    has $.radius;

    method area {
        π * $.radius * $.radius;
    }
}

say Circle.new(radius => 2).area; # 12.566370614359172
```

Ambaŭ kalkulas la saman nombron. La diferenco estas, de kie venas la datumoj: la subrutino ricevas la radiuson kiel argumenton, dum la metodo legas ĝin el la objekto, sur kiu ĝi estis vokata.

Kiel ĝenerala regulo, uzu subrutinon por memstara operacio, kiu simple transformas siajn argumentojn, kaj metodon, kiam la konduto nature apartenas al objekto kaj laboras kun la propra stato de tiu objekto. Por klas-specifaj, sed ĝeneralaj rutinoj, uzu klasmetodojn.

{% include nav.html %}
