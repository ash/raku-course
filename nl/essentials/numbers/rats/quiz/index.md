---
title: 'Quiz: Rationale getallen'
---

{% include menu.html %}

Selecteer de getallen die `Rat` zijn in Raku.

<!--0 | ↉ | Dit is een `Int` getal, en de waarde is `0`.-->

{:.quiz}
1 | 3/64 | Dit is een `Rat` getal, geen deling van twee gehele getallen.
1 | ⅞
1 | 2.718281828459045 | Dat is een benaderde waarde van de Euler constante, maar dit is nog steeds een `Rat`, omdat het niet oneindig lang is.
1 | 10_230/50_245 | Je kunt hier ook de `_` scheidingsteken gebruiken.
1 | 10.345_678 | En hier.
0 | 10.345,678 | Een komma hier is noch een decimale komma noch een scheidingsteken.
1 | <33/44> | Een andere vorm van het schrijven van rationale getallen in Raku.
0 | <33 44> | Dit is een lijst van strings (we zullen dit verder in de cursus zien).
0 | &apos;<33 44>&apos; | Dit is een string.
1 | ⅞/⅚ | Dit is een deling van twee `Rat` getallen, maar het resultaat is ook een `Rat` getal.

{% include quiz.html %}

{% include nav.html %}