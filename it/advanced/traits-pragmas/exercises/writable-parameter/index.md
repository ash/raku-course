---
title: Un parametro scrivibile
---

{% include menu.html %}

## Problema

Per impostazione predefinita i parametri di una subroutine sono in sola lettura, quindi una routine non può modificare la variabile del chiamante. Il trait `is rw` rimuove questa restrizione.

Scrivi una subroutine `double` il cui unico parametro sia contrassegnato con `is rw`, e che raddoppi il valore sul posto (`$n *= 2`). Chiamala su una variabile contenente `21`, poi stampa la variabile per mostrare che è diventata `42`.

## Esempio

Il programma stampa:

```
42
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
