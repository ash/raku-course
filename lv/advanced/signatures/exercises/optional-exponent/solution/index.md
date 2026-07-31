---
title: 'Risinājums: Neobligāta pakāpe'
translations_gpt:
---

{% include menu.html %}

Seit ir iespejams uzdevuma risinajums.

## Kods

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 Pirmkodu var atrast faila [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Izvade

```
25
125
```

## Komentari

1. `?` pec `$exp` padara to par neobligatu, tapec `power` var izsaukt tikai ar bazi.

1. Kad `$exp` ir izlaists, tas ir nedefinets, un `//` nodrosina rezerves vertibu `2`, tapec `power(5)` cela bazi kvadrata, iegustot `25`. Ja eksponents ir dots, ka `power(5, 3)`, tiek izmantota si vertiba, iegustot `125`.

{% include nav.html %}
