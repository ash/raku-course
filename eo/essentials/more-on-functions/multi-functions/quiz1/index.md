---
title: Kvizo 1 — Simplaj multi-funkcioj
---

{% include menu.html %}

Kiaj estas la ĝustaj manieroj krei multi-funkcion?

## 1

```raku
sub func($a) {. . .}
sub func($a, $b) {. . .}
```

{:.quiz-select}
malĝusta | Ĉi tiuj difinoj estas&nbsp; (: ĝusta, malĝusta :) | La deklarilo `multi` mankas.

## 2

```raku
multi func($a) {. . .}
multi func($a, $b) {. . .}
```

{:.quiz-select}
ĝusta | Ĉi tiuj difinoj estas&nbsp; (: ĝusta, malĝusta :) | La deklarilo `sub` mankas, sed tio estas akceptebla.

## 3

```raku
multi sub func($a) {. . .}
multi sub func($a, $b) {. . .}
```

{:.quiz-select}
ĝusta | Ĉi tiuj difinoj estas&nbsp; (: ĝusta, malĝusta :) | Tute perfekta.

## 4

```raku
sub multi func($a) {. . .}
sub multi func($a, $b) {. . .}
```

{:.quiz-select}
malĝusta | Ĉi tiuj difinoj estas&nbsp; (: ĝusta, malĝusta :) | Devus esti `multi` `sub`, ne `sub` `multi`.

## 5

```raku
multi sub func($a) {. . .}
multi sub func($b) {. . .}
```

{:.quiz-select}
malĝusta | Ĉi tiuj difinoj estas&nbsp; (: ĝusta, malĝusta :) | La subskriboj ne povas esti distingitaj ĉe multobla sendado.


{% include quiz.html %}

{% include nav.html %}