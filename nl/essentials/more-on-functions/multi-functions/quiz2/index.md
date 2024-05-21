---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Wat zijn de correcte manieren om een multi-functie te maken?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
correct | Deze definities zijn&nbsp; (: correct, incorrect :) | Parameter types verschillen.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Deze definities zijn&nbsp; (: correct, incorrect :) | Aantal parameters verschilt.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Deze definities zijn&nbsp; (: correct, incorrect :) | Een variant met alleen positionele parameter is prima.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
correct | Deze definities zijn&nbsp; (: correct, incorrect :) | De eerste variant vangt alles behalve `Int`.


{% include quiz.html %}

{% include nav.html %}