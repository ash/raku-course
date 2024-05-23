---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Quae sunt modi recti ad multi-functionem creandam?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
correct | Hae definitiones sunt&nbsp; (: correct, incorrect :) | Typi parameterorum differunt.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Hae definitiones sunt&nbsp; (: correct, incorrect :) | Numerus parameterorum differt.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Hae definitiones sunt&nbsp; (: correct, incorrect :) | Varians cum solo positionali parametro est recta.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
correct | Hae definitiones sunt&nbsp; (: correct, incorrect :) | Prima varians omnia praeter `Int` capit.


{% include quiz.html %}

{% include nav.html %}