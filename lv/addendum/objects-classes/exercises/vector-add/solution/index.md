---
title: 'Risinājums: Vektoru saskaitīšana'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [vector-add.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/vector-add.raku).

## Izvade

```
(4, 6)
```

## Komentāri

1. `add` nemaina nevienu no vektoriem; tā no saskaitītajām komponentēm konstruē un
atgriež pavisam jaunu `Vector`.

1. Ievērojiet, ka `Vector` tiek lietots *savas definīcijas iekšienē* — gan kā
parametra tips `Vector $v`, gan `Vector.new`. Tas ir pilnīgi pieņemami: tipa
nosaukums ir zināms no brīža, kad sākas tā deklarācija, tāpēc klase savās metodēs
var brīvi atsaukties pati uz sevi. Nekāda priekšdeklarācija nav vajadzīga.

1. `put` savu argumentu pārvērš virknē ar metodi `Str`, tāpēc parādās tieši
pielāgotais `"($.x, $.y)"` noformējums.

{% include nav.html %}
