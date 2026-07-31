---
title: 'Risinājums: Savāciet trīs reizinājumus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Atrodiet programmu failā [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Izvade

```
[3 6 9 12 15]
```

## Komentāri

1. Cikls apmeklē katru skaitli, bet `take` izpildās tikai tad, kad `$_ %% 3` ir patiess.

1. Tāpēc sarakstā tiek savākti vienīgi trijnieka reizinājumi.

{% include nav.html %}
