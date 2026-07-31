---
title: 'Risinājums: Mīkstais apgrieztais skaitlis'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 Atrodiet programmu failā [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Izvade

```
0.25
undefined
```

## Komentāri

1. `reciprocal(4)` parastā kārtā atgriež `1 / 4`, tas ir, `0.25`.

1. `reciprocal(0)` izsauc `fail`, tāpēc tā atgriež `Failure`, kas ir nedefinēts. Operators `//` atgriež savu labās puses operandu ikreiz, kad kreisā puse ir nedefinēta, tāpēc iegūstam atkāpšanās vērtību `undefined`.

1. `//` lietošana skaitās neveiksmes apstrādāšana: tā pārbauda definētību, vērtību neizmantojot, tāpēc `Failure` paliek mīksts un nekad netiek izmests kā īsts izņēmums.

{% include nav.html %}
