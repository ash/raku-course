---
title: Symbola enumerare
translations_gpt: true
---

{% include menu.html %}

## Problema

Modulus in archivo `Circle.rakumod` datus est qui duas variabiles `our` definit:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Programma scribe quod modulum adhibet et primum quot nomina in fasciculo moduli definita sint imprimit, deinde nomina ipsa ordine alphabetico.

## Exemplum

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
