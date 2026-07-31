---
title: 'Risinājums: Pielietojiet divreiz'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Atrodiet programmu failā [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Izvade

```
18
```

## Komentāri

1. Parametrs `&f` saņem apakšprogrammu; iekšējais `f($x)` tiek padots ārējam `f(...)`.

1. Trīskāršojot `2`, iznāk `6`, un trīskāršojot vēlreiz — `18`.

{% include nav.html %}
