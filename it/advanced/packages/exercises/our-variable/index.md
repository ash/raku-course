---
title: Una variabile our
translations_gpt: true
---

{% include menu.html %}

## Problema

Solo `our` rende un nome visibile fuori dal suo package; `my` lo mantiene privato. Crea un package `Config` con una variabile `our` `$port` impostata a `8080` **e** una variabile `my` `$secret` impostata a `42`. Dall'esterno, stampa `$Config::port`, e poi stampa se `$Config::secret` è definita — non dovrebbe esserlo, perché una variabile `my` non fa parte del namespace.

## Esempio

Il programma stampa:

```
8080
False
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
