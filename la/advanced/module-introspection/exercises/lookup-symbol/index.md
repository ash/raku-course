---
title: Symbolum quaerere
translations_gpt: true
---

{% include menu.html %}

## Problema

Praeter enumerationem nominum fasciculi, nomen dynamice attingere potes eo ut clave in stash fasciculi utaris. Modulus `Circle.rakumod` datus est:

```raku
unit module Circle;

our $pi = 3.14;
```

Programma separatum scribe quod modulum onerat et valorem `$pi` imprimit eum in stash quaerendo per `Circle::{'$pi'}` — non per qualificatum `$Circle::pi`.

## Exemplum

Cum modulo in via investigationis cursum, programma imprimit:

```console
$ raku -I. lookup.raku
3.14
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
