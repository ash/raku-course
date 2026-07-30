---
title: 'Oplossing: Collatz-stappen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $n = 27;
my $steps = 0;

while $n != 1 {
    $n = $n %% 2 ?? $n div 2 !! 3 * $n + 1;
    $steps++;
}

say $steps;
```

🦋 Je kunt de broncode vinden in het bestand [collatz.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/collatz.raku).

## Uitvoer

```
111
```

## Opmerkingen

1. De ternaire `?? !!` kiest de volgende waarde in één uitdrukking: halveer `$n` wanneer het
even is (`$n %% 2`), pas anders `3 * $n + 1` toe.

1. `27` is een befaamd klein geval dat een verrassend lange omweg maakt — `111` stappen
— voordat het uiteindelijk op `1` uitkomt.

{% include nav.html %}
