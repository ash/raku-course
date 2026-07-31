---
title: 'Solutio: Sequentia Tribonacci'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @trib = 1, 1, 1, * + * + * ... *;
say @trib[^8];
```

🦋 Inveni codicem fontem in archivo [tribonacci.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/tribonacci.raku).

## Exitus

```
(1 1 1 3 5 9 17 31)
```

## Commentarii

1. Clausura `* + * + *` tria elementa priora addit ut sequens producat, itaque tribus valoribus initialibus opus est.

1. Sequentia pigra est, itaque eam in `@trib` reponens et `@trib[^8]` petens solos primos octo numeros computas.

{% include nav.html %}
