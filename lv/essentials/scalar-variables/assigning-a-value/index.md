---
title: Vērtības piešķiršana
---

{% include menu.html %}

Izmantojiet operatoru `=` lai ievietotu jaunu vērtību skalāra konteinerā.

```raku
my $name;
$name = 'Anna';
```

Tagad jūs varat izmantot mainīgo un, piemēram, izdrukāt to:

```raku
say $name;
```

## Vairāku vērtību piešķiršana

Vairākiem mainīgajiem var piešķirt vērtības vienlaicīgi. Piemēram, šādi var piešķirt vērtības diviem skalāriem vienā izteikumā:

```raku
my ($a, $b);
($a, $b) = 10, 20;
```

Ņemiet vērā, ka jūs nevarat izlaist iekavas kreisajā pusē. Bet jūs varat pievienot tās simetrijai labajā pusē:

```raku
($a, $b) = (10, 20);
```

{% include nav.html %}