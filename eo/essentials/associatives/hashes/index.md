---
title: Hashes
---

{% include menu.html %}

Un _hash_ estas alia ekzemplo de asociativaj datumtipoj en Raku. Ĝi estas agrega datumtipo kiu mapigas la nomojn de siaj eroj al iliaj valoroj. Ni enkonduku la novan siglon, kiun uzas hash-variabloj: `%`.

```raku
my %capitals;
```

Vi nun povas uzi la hash kaj asigni kelkajn komencajn valorojn al ĝi.

```raku
%capitals = France => 'Paris', Italy => 'Rome';
```

Kiel kun aliaj datumtipoj, ambaŭ agoj povas esti faritaj kune:

```raku
my %capitals = France => 'Paris', Italy => 'Rome';
```

## Alirante la elementojn

Subskribi la elementojn estas simila al tio, kion ni vidis por [paroj](../pairs). Uzu paron da angulaj krampoj aŭ kurbaj krampoj kun ŝnuro:

```raku
say %capitals<France>;
say %capitals{'Italy'};
```

Hashoj estas ŝanĝeblaj, do vi povas kaj ŝanĝi la ekzistantajn valorojn kaj aldoni novajn:

```raku
%capitals<Germany> = 'Berlin';
```

## Ŝlosiloj kaj valoroj

La du enkonstruaj metodoj, `keys` kaj `values`, redonas la listojn de la ŝlosiloj kaj la valoroj de hash:

```raku
say %capitals.keys;
say %capitals.values;
```

Jen ekzemplo de la eligo de ĉi tiu programo:

    (Germany Italy France)
    (Berlin Rome Paris)

Notu, ke hash-elementoj ne estas ordigitaj, sed la ordo de la ŝlosiloj kaj valoroj, redonitaj de la supraj metodoj, estas identa.

{% include nav.html %}