---
title: 'Risinājums: Atkārtot katru skaitli'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @result = gather for 1..4 -> $n {
    take $n for 1..$n;
};

say @result;
```

🦋 Atrodiet programmu failā [collect-the-evens.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/collect-the-evens.raku).

## Izvade

```
[1 2 2 3 3 3 4 4 4 4]
```

## Komentāri

1. Nekas neliek katrā iterācijā izsaukt `take` tieši vienu reizi. Šeit iekšējais `take $n for 1..$n` izsauc `take` dažādu reižu skaitu katrā piegājienā, un tieši šī elastība padara `gather`/`take` jaudīgāku par vienkāršu `map`.

1. Ārējais cikls ar nolūku izmanto nosauktu mainīgo `-> $n`. Ja iekšējo ciklu rakstītu ar `$_`, iekšējais `for` piesaistītu `$_` savam skaitītājam, un mēs ņemtu skaitītāju, nevis pašreizējo skaitli.

1. `gather` vienkārši savāc katru paņemto vērtību secībā, tāpēc `@result` beigās satur `1`, tad divus `2`, tad trīs `3`, tad četrus `4`.

{% include nav.html %}
