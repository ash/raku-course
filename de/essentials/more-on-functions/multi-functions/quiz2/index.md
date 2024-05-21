---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Was sind die korrekten Wege, um eine Multi-Funktion zu erstellen?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
correct | Diese Definitionen sind&nbsp; (: korrekt, inkorrekt :) | Die Parametertypen unterscheiden sich.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Diese Definitionen sind&nbsp; (: korrekt, inkorrekt :) | Die Anzahl der Parameter unterscheidet sich.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Diese Definitionen sind&nbsp; (: korrekt, inkorrekt :) | Eine Variante mit nur positionsbasiertem Parameter ist in Ordnung.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
correct | Diese Definitionen sind&nbsp; (: korrekt, inkorrekt :) | Die erste Variante fängt alles außer `Int` ab.


{% include quiz.html %}

{% include nav.html %}