---
title: Quiz 1 — Simple multi-functions
---

{% include menu.html %}

Wat zijn de correcte manieren om een multi-functie te maken?

## 1

```raku
sub func($a) {. . .}
sub func($a, $b) {. . .}
```

{:.quiz-select}
incorrect | Deze definities zijn&nbsp; (: correct, incorrect :) | De `multi` declarator ontbreekt.

## 2

```raku
multi func($a) {. . .}
multi func($a, $b) {. . .}
```

{:.quiz-select}
correct | Deze definities zijn&nbsp; (: correct, incorrect :) | De `sub` declarator ontbreekt, maar dat is acceptabel.

## 3

```raku
multi sub func($a) {. . .}
multi sub func($a, $b) {. . .}
```

{:.quiz-select}
correct | Deze definities zijn&nbsp; (: correct, incorrect :) | Helemaal perfect.

## 4

```raku
sub multi func($a) {. . .}
sub multi func($a, $b) {. . .}
```

{:.quiz-select}
incorrect | Deze definities zijn&nbsp; (: correct, incorrect :) | Het moet `multi` `sub` zijn, niet `sub` `multi`.

## 5

```raku
multi sub func($a) {. . .}
multi sub func($b) {. . .}
```

{:.quiz-select}
incorrect | Deze definities zijn&nbsp; (: correct, incorrect :) | De handtekeningen kunnen niet worden onderscheiden bij meerdere dispatch.


{% include quiz.html %}

{% include nav.html %}