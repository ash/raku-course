---
title: 'Risinājums: Savāciet kubus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Atrodiet programmu failā [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Izvade

```
[1 8 27 64]
```

## Komentāri

1. `take` izpildās vienreiz par katru skaitli, dodot tā kubu (`$_ ** 3`).

1. `gather` bloks dod sarakstu ar visām paņemtajām vērtībām.

{% include nav.html %}
