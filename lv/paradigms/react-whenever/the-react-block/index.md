---
title: Bloks react
translations_gpt:
---

{% include menu.html %}

`react` bloks ir vieta, kur mājo reakcijas. Tā iekšienē `whenever` saka: «ikreiz, kad šī supply izstaro vērtību, izpildi šo ķermeni». `react` bloks pēc tam gaida, līdz katra tā vērotā supply ir pabeigta:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
}

say $sum; # 6
```

`whenever` ķermenis izpildās vienreiz par katru vērtību — `1`, `2`, `3` —, pieskaitot to `$sum`. Temata vērtība ir pieejama kā `$_` (to var arī nosaukt ar `-> $v`).

Galvenā uzvedība ir tā, ka `react` **bloķē**, līdz tā supply ir pabeigtas. Tikai pēc tam, kad `Supply.from-list` ir izstarojusi visas savas vērtības, `react` bloks beidzas un programma pāriet pie `say`. Tieši tāpēc `$sum` izdrukāšanas brīdī jau ir `6`: `react` bloks nogaidīja visu straumi.

Tas padara `react` par dabisku vietu, kur savākt rezultātus no straumes: izveidojiet reakcijas, ļaujiet tam noskriet līdz galam un pēc tam izmantojiet savākto.

{% include nav.html %}
