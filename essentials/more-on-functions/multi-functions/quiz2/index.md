---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

What are the correct ways to create a multi-function?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
correct | These definitions are&nbsp; (: correct, incorrect :) | Parameter types differ.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | These definitions are&nbsp; (: correct, incorrect :) | Number of parameters differ.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | These definitions are&nbsp; (: correct, incorrect :) | A variant with positional-only parameter is fine.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
correct | These definitions are&nbsp; (: correct, incorrect :) | The first variant catches everything but `Int`.


{% include quiz.html %}

{% include nav.html %}
