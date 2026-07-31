---
title: Prokuranto de metodvokoj
---

{% include menu.html %}

Esti skalara ujo efektive signifas esti objekto de la tipo `Scalar`. Plej ofte, la uzo de skalaroj estas tiel travidebla, ke programisto ne bezonas pensi pri la ujo mem kaj povas imagi, ke oni laboras rekte kun la valoroj konservitaj en ĝi.

Tio funkcias ĉar skalara ujo transdonas metodvokojn al la valoro, kiun ĝi enhavas. Ekzemple, post la asigno `my $lang = 'Raku'`, vi povas voki la metodon `.chars` sur la variablo:

```raku
my $lang = 'Raku';
say $lang.chars; # 4
```

La programo presas `4`, kio estas la nombro de signoj en la ĉeno `'Raku'`. La rezulto estas ekzakte la sama, kiel se vi vokus `.chars` rekte sur la ĉena valoro, anstataŭ sur la ujo-variablo:

```raku
say 'Raku'.chars; # 4
```

Alivorte, la ujo silente transdonas la vokon `.chars` al la ĉeno, kiun ĝi enhavas, kaj redonas la rezulton al vi.

{% include nav.html %}
