---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Quali sono i modi corretti per creare una multi-funzione?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
correct | Queste definizioni sono&nbsp; (: corrette, scorrette :) | I tipi dei parametri differiscono.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Queste definizioni sono&nbsp; (: corrette, scorrette :) | Il numero di parametri differisce.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Queste definizioni sono&nbsp; (: corrette, scorrette :) | Una variante con parametro solo posizionale va bene.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
correct | Queste definizioni sono&nbsp; (: corrette, scorrette :) | La prima variante cattura tutto tranne `Int`.


{% include quiz.html %}

{% include nav.html %}