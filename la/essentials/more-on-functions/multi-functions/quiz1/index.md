---
title: Quiz 1 — Simple multi-functions
---

{% include menu.html %}

Quae sunt modi recti ad creandum multi-functionem?

## 1

```raku
sub func($a) {. . .}
sub func($a, $b) {. . .}
```

{:.quiz-select}
incorrectum | Hae definitiones sunt&nbsp; (: correctae, incorrectae :) | Declarator `multi` deest.

## 2

```raku
multi func($a) {. . .}
multi func($a, $b) {. . .}
```

{:.quiz-select}
correctum | Hae definitiones sunt&nbsp; (: correctae, incorrectae :) | Declarator `sub` deest, sed id acceptabile est.

## 3

```raku
multi sub func($a) {. . .}
multi sub func($a, $b) {. . .}
```

{:.quiz-select}
correctum | Hae definitiones sunt&nbsp; (: correctae, incorrectae :) | Omnino perfectum.

## 4

```raku
sub multi func($a) {. . .}
sub multi func($a, $b) {. . .}
```

{:.quiz-select}
incorrectum | Hae definitiones sunt&nbsp; (: correctae, incorrectae :) | Debet esse `multi` `sub`, non `sub` `multi`.

## 5

```raku
multi sub func($a) {. . .}
multi sub func($b) {. . .}
```

{:.quiz-select}
incorrectum | Hae definitiones sunt&nbsp; (: correctae, incorrectae :) | Signaturae distingui non possunt ad multiplicem distributionem.


{% include quiz.html %}

{% include nav.html %}