---
title: Nuntia et recupera
translations_gpt:
---

{% include menu.html %}

## Problema

Ostende quomodo `CATCH` programmati permittat recuperare et cum valore praedefinito sensato pergere.

Declara variabilem `$timeout` ad valorem praedefinitum `30` positam ante clausulam. Intra clausulam age `die 'config missing'` et deinde (in linea quae numquam attingetur) conare `$timeout` ad `60` ponere. Utere fasi `CATCH` cuius clausula `default` imprimit `warning: <nuntius>; keeping default`. Post clausulam imprime `timeout is <timeout> seconds`.

## Exemplum

Programma imprimit:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
