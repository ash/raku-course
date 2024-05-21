---
title: Quiz 2 — Lista y escalar vs. lista y arreglo
---

{% include menu.html %}

Hay listas en el lado derecho en las siguientes asignaciones. ¿De qué tipo son los objetos que las variables mantienen?

### 1

```raku
my $x = (100, 200, 300);
my @x = (100, 200, 300);

say $x.WHAT;
say @x.WHAT;
```

Elige las respuestas correctas:

{:.quiz-select}
(List) | El tipo de `$x` es&nbsp; (: (Array), (Int), (List) :)
(Array) | El tipo de `@x` es&nbsp; (: (Array), (Int), (List) :)

## 2*

Aquí hay un caso más complicado. No te preocupes si no lo entiendes ahora. Volveremos a este tema en la segunda parte del curso.

```raku
my $x = [100, 200, 300];
my @x = [100, 200, 300];

say $x.WHAT;
say @x.WHAT;
```

Elige las respuestas correctas:

{:.quiz-select}
(Array) | El tipo de `$x` es&nbsp; (: (Array), (Int), (List) :)
(Array) | El tipo de `@x` es&nbsp; (: (Array), (Int), (List) :)

{% include quiz.html %}

{% include nav.html %}