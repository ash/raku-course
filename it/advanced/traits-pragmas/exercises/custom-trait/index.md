---
title: Un trait personalizzato
---

{% include menu.html %}

## Problema

Un trait personalizzato può accettare un argomento, non solo essere presente o assente. Scrivi un trait `is role(...)` che accetti una stringa e registri, in un hash indicizzato dal nome della subroutine, il ruolo assegnato a quella subroutine.

Applica `is role('admin')` a una subroutine `login`, poi stampa il ruolo memorizzato per `login`.

## Esempio

Il programma stampa:

```
admin
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
