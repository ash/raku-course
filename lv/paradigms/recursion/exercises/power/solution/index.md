---
title: 'Risinājums: Pakāpe'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Atrodiet programmu failā [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Izvade

```
1024
```

## Komentāri

1. Bāzes gadījums atgriež `1`, kad kāpinātājs sasniedz `0`, jo jebkura bāze nulltajā pakāpē ir viens.

1. Rekursīvais solis reizina `$base` ar `power($base, $exp - 1)`, katru reizi nolobot vienu reizinātāju. Tāpēc `power(2, 10)` sareizina desmit `2`, dodot `1024`.

{% include nav.html %}
