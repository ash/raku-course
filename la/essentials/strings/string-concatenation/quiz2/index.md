---
title: 'Quiz 1: Concatenating strings and numbers'
---

{% include menu.html %}

Raku numerum automatice convertit si vis eum concatenare ad stringam. In singulis partibus infra, selige lineas quae stringam requisitam imprimunt.

## 1

Quae lineae imprimunt `Alpha2`?

{:.quiz}
1 | dic &apos;Alpha2&apos;;
0 | dic &apos;Alpha&apos; 2; | Spatium hic est error syntacticus.
1 | dic &apos;Alpha&apos;, &apos;2&apos;; | Nulla est concatenatio stringae, sed eventus est rectus.
1 | dic &apos;Alpha&apos; ~ &apos;2&apos;;
1 | dic &apos;Alpha&apos; ~ 2; | Numerus convertitur ad stringam et deinde concatenatur.
0 | dic &apos;Alpha&apos; + 2; | `+` non facit concatenationem stringae.
0 | dic &apos;Alpha&apos; . 2; | Neque `.`.

## 2

Quae ex his lineis imprimunt `123`?

{:.quiz}
1 | dic 1 ~ 2 ~ 3; | Concatenatio stringae hic, etiam pro numeris.
0 | dic 1 + 2 + 3; | Expressio arithmetica regularis.
1 | dic &apos;1&apos; ~ &apos;2&apos; ~ &apos;3&apos;; | Singulae characteres etiam sunt stringae.
0 | dic &apos;1&apos; + &apos;2&apos; + &apos;3&apos;; | Cum sit `+`, stringae convertuntur ad numeros.
1 | dic 1 ~ 23;
1 | dic 12 ~ 3;
1 | dic 123 ~ &apos;&apos;; | `''` est stringa vacua, ita addendo eam non mutat eventum.

{% include quiz.html %}

{% include nav.html %}