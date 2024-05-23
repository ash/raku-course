---
title: Tajpitaj variabloj
---

{% include menu.html %}

En Raku, skalaro variablo (aŭ, skalaro ujo) povas teni ununuran objekton de malsamaj tipoj. Ekzemple, la sama variablo povas unue enhavi numeron, kaj poste ŝnuron:

```raku
my $var = 42;
$var = 'Hello';
```

Jen alia ekzemplo de miksado de malsamaj datumtipoj en la sama esprimo:

```raku
my $a = '100';
my $b = 200;
say $a + $b; # 300
```

Tio estas, probable, ne la plej bona kodpraktiko, sed ĝi estas tute valida Raku-programo.

Tamen, Raku permesas al vi specifii kion donita variablo povas teni. Estas pli da detaloj en la subaj temoj.

{% include nav.html %}