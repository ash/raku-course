---
title: Skalaraj ujoj
---

{% include menu.html %}

Kiel la nomo sugestas, skalaraj ujoj enhavas unuopajn (skalarajn) valorojn. Tiaj ujoj estas markitaj per la sigelo `$`.

Jen unu el la plej simplaj kaj rektaj uzoj de skalaro:

```raku
my $lang = 'Raku';
```

La variablo `$lang` estas skalara ujo.

Defaŭlte, skalaraj ujoj ne devigas tipon sur la datumoj, do vi povas konservi valoron de ajna tipo en ili. La plej simpla demonstrado de tio estas, ke vi povas reuzi la saman variablon por konservi entjeron kaj poste ĉenon:

```raku
my $value = 42;
$value = 'forty-two';
```

(La aŭtoro ne kuraĝigas vin programi tiamaniere.)

Interne, tio signifas, ke defaŭlte nova ujo povas teni valorojn de la tipo `Any`. `Any` estas la baza tipo por plej multaj aliaj tipoj, kiel `Int` aŭ `Str`.

{% include nav.html %}
