---
title: 'Solutio: Primi multipli septem'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Inveni codicem fontem in archivo [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Exitus

```
(7 14 21 28 35)
```

## Commentarii

1. `1..*` intervallum infinitum est; `.map(* * 7)` unumquodque elementum pigre per septem multiplicat.

1. `.head(5)` solos quinque primos extrahit, itaque fons infinitus numquam plene computatur.

{% include nav.html %}
