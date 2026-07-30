---
title: 'Oplossing: Vectoren optellen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Vector {
    has $.x;
    has $.y;

    method add(Vector $v) {
        Vector.new(x => $.x + $v.x, y => $.y + $v.y);
    }

    method Str { "($.x, $.y)" }
}

my $sum = Vector.new(x => 1, y => 2).add(Vector.new(x => 3, y => 4));

put $sum;
```

🦋 Je kunt de broncode vinden in het bestand [vector-add.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/vector-add.raku).

## Uitvoer

```
(4, 6)
```

## Opmerkingen

1. `add` verandert geen van beide vectoren; ze bouwt een gloednieuwe
`Vector` uit de opgetelde componenten en geeft die terug.

1. Merk op dat `Vector` *binnen zijn eigen definitie* gebruikt wordt — als parametertype
`Vector $v` en in `Vector.new`. Dat is volkomen in orde: de typenaam is
bekend vanaf het moment dat de declaratie begint, dus een klasse kan in haar eigen methoden vrijelijk naar
zichzelf verwijzen. Er is geen enkele vorm van vooruitdeclaratie nodig.

1. `put` maakt van zijn argument een string met de methode `Str`, dus is de eigen
opmaak `"($.x, $.y)"` wat er verschijnt.

{% include nav.html %}
