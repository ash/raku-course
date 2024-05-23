---
title: Kvizo 2 — Multi-funkcioj kun tajpitaj parametroj
---

{% include menu.html %}

Kiaj estas la ĝustaj manieroj krei multi-funkcion?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
correct | Ĉi tiuj difinoj estas&nbsp; (: ĝustaj, malĝustaj :) | Parametraj tipoj malsamas.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Ĉi tiuj difinoj estas&nbsp; (: ĝustaj, malĝustaj :) | Nombro de parametroj malsamas.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Ĉi tiuj difinoj estas&nbsp; (: ĝustaj, malĝustaj :) | Varianto kun nur pozicia parametro estas bona.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
correct | Ĉi tiuj difinoj estas&nbsp; (: ĝustaj, malĝustaj :) | La unua varianto kaptas ĉion krom `Int`.


{% include quiz.html %}

{% include nav.html %}