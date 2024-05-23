---
title: Kvizo — Nomitaj parametroj
---

{% include menu.html %}

Konsideru funkcion:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

## 1

Kiaj estas la validaj manieroj por voki ĝin?

{:.quiz}
0 | f(1, 2) | Poziciaj argumentoj pasitaj, ne nomitaj.
1 | f(a => 1, b => 2)
0 | f(a = 1, b = 2) | Asigna operatoro anstataŭ paro-konstruanto.
1 | f(b => 2, a => 1)

## 2

Por la sama funkcio, kion la sekvaj vokoj redonas?

{:.quiz-select}
−1 | `f(a => 1, b => 2)` redonas&nbsp; (: 1, −1 :)
−1 | `f(b => 2, a => 1)` redonas&nbsp; (: 1, −1 :) | La ordo de nomitaj argumentoj ne gravas.
1 | `f(a => 2, b => 1)` redonas&nbsp; (: 1, −1 :)


{% include quiz.html %}

{% include nav.html %}