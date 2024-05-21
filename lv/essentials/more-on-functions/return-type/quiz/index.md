---
title: Viktorīna — Funkcijas ar noklusējuma vērtībām
---

{% include menu.html %}

Ir funkcija:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Pārbaudiet, kuri no sekojošiem piešķīrumiem darbosies.

{:.quiz}
1 | my $a = add(4, 6); | Piešķiršana netipizētam mainīgajam darbojas.
0 | my Rat $b = add(5, 6); | `Int` vērtību nevar piešķirt `Rat` tipa mainīgajam.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | Eksplicīta tipa konversija palīdz.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}