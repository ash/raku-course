---
title: Deklarācija ar inicializāciju
---

{% include menu.html %}

Ja jūs zināt vērtību, kuru vēlaties piešķirt mainīgajam tā izveides brīdī, jūs varat ietaupīt vienu koda rindu un uzrakstīt to vienā paziņojumā:

```raku
my $name = 'Anna';
say $name;
```

## Vairāki mainīgie

Lai izveidotu un piešķirtu vairāk nekā vienu mainīgo, izmantojiet šādu paraugu:

```raku
my ($name, $age) = 'Carl', 36;
```

{% include nav.html %}