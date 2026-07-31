---
title: Segnalate e recuperate
translations_gpt:
---

{% include menu.html %}

## Problema

Mostra come `CATCH` permetta a un programma di recuperare e proseguire con un valore predefinito sensato.

Dichiara una variabile `$timeout` impostata al valore predefinito `30` prima di un blocco. Dentro il blocco fai `die 'config missing'` e poi (su una riga che non verrà mai raggiunta) prova a impostare `$timeout` a `60`. Usa un phaser `CATCH` il cui blocco `default` stampa `warning: <messaggio>; keeping default`. Dopo il blocco stampa `timeout is <timeout> seconds`.

## Esempio

Il programma stampa:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
