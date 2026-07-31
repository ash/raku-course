---
title: 'Risinājums: Skaitīšana augšup'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub countup($n) {
    return if $n < 1;
    countup($n - 1);
    say $n;
}

countup(3);
```

🦋 Atrodiet programmu failā [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/count-up.raku).

## Izvade

```
1
2
3
```

## Komentāri

1. Bāzes gadījums `return if $n < 1` joprojām aptur rekursiju, tiklīdz skaits pārkāpj nullei.

1. Tieši abu pēdējo rindu secība liek skaitīt *augšup*: katrs izsaukums vispirms rekursē līdz pat bāzes gadījumam un tikai tad, izsaukumiem attinoties, izdrukā savu skaitli. Tāpēc `1` tiek izdrukāts pirmais un `$n` pēdējais.

{% include nav.html %}
