---
title: Constantem legere
translations_gpt:
---

{% include menu.html %}

## Problema

Datur tibi modulus in archivo `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Scribe programma quod hunc modulum per `need` (non per `use`) onerat et valorem `$pi` imprimit. Memento `need` nomina non importare, itaque variabilem per nomen moduli attingis.

## Exemplum

```console
$ raku -I. read-pi.raku
3.14
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
