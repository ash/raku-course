---
title: Quiz 1 — Simple multi-functions
---

{% include menu.html %}

What are the correct ways to create a multi-function?

## 1

```raku
sub func($a) {. . .}
sub func($a, $b) {. . .}
```

{:.quiz-select}
incorrect | These definitions are&nbsp; (: correct, incorrect :) | The `multi` declarator is missing.

## 2

```raku
multi func($a) {. . .}
multi func($a, $b) {. . .}
```

{:.quiz-select}
correct | These definitions are&nbsp; (: correct, incorrect :) | The `sub` declarator is missing, but that is acceptable.

## 3

```raku
multi sub func($a) {. . .}
multi sub func($a, $b) {. . .}
```

{:.quiz-select}
correct | These definitions are&nbsp; (: correct, incorrect :) | Totally perfect.

## 4

```raku
sub multi func($a) {. . .}
sub multi func($a, $b) {. . .}
```

{:.quiz-select}
incorrect | These definitions are&nbsp; (: correct, incorrect :) | Should be `multi` `sub`, not `sub` `multi`.

## 5

```raku
multi sub func($a) {. . .}
multi sub func($b) {. . .}
```

{:.quiz-select}
incorrect | These definitions are&nbsp; (: correct, incorrect :) | The same signature even despite different parameter names.


{% include quiz.html %}

{% include nav.html %}
