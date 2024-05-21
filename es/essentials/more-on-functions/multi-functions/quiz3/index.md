---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Aquí están las tres variantes de la función.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

¿Cuáles llamadas son válidas?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | No hay `multi sub func(Str $a`).
1 | func(4.4)

¿Qué devuelven las llamadas?

{:.quiz-select}
1 | `func(4)` devuelve&nbsp; (: 1, 2, 3 :)
2 | `func(4.4)` devuelve&nbsp; (: 1, 2, 3 :) | `4.4` es un `Rat`.
2 | `func(4/4)` devuelve&nbsp; (: 1, 2, 3 :) | `4/4` también es un número `Rat`.
3 | `func(4e4)` devuelve&nbsp; (: 1, 2, 3 :) | Un número en notación científica es `Num`.

{% include quiz.html %}

{% include nav.html %}