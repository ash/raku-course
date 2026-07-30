---
title: '`WHO` en `HOW`'
---

{% include menu.html %}

Twee extra introspectietools maken de set compleet: `HOW` en `WHO`.

## `HOW`

Elke waarde in Raku wordt ondersteund door een _metaobject_ — een object dat weet hoe het type van de waarde werkt. `HOW` (afkorting van _Higher Order Workings_) geeft dat metaobject terug:

```raku
my $x = 42;
say $x.HOW.^name; # Perl6::Metamodel::ClassHOW
```

Je hebt het metaobject al die tijd gebruikt, misschien zonder het te merken. De `.^` in `.^name` is een methode-aanroep die via `HOW` wordt gerouteerd. Deze twee regels zijn equivalent:

```raku
my $x = 42;
say $x.^name;        # Int
say $x.HOW.name($x); # Int
```

Dus `$x.^name` is gewoon een kortere manier om `$x.HOW.name($x)` te schrijven. Merk op dat het object opnieuw als argument wordt meegegeven: het metaobject wordt *gedeeld* door elke waarde van het type, dus een meta-methode krijgt te horen over welk object het gaat. De `.^`-vorm doet dit automatisch voor je. (Voor `name` wordt het argument toevallig genegeerd, maar het meegeven ervan is de correcte, algemene vorm — sommige meta-methodes gebruiken het wel.)

Hetzelfde geldt voor andere meta-methodes die je kunt tegenkomen, zoals `.^methods`, die de methodes opsomt waarop een waarde reageert.

## `WHO`

`WHO` geeft het _package_ terug waartoe een naam behoort — de tabel met symbolen die in die namespace zijn gedefinieerd:

```raku
say Int.WHO.^name; # Stash
```

Een `Stash` (een symbooltabel-hash) wordt nuttig wanneer je met modules werkt, waar het je de namen laat opzoeken die een module definieert. We komen er op terug in [het gedeelte over modules](/nl/advanced/module-introspection); voor nu is het voldoende om te weten dat `WHO` bestaat en wat het vertegenwoordigt.

{% include nav.html %}
