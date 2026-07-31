---
title: Apstrādājiet un turpiniet
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Palaidiet ciklu pāri trim elementiem `ok`, `bad` un `ok`. Katram izpildiet bloku, kas izdrukā `processed <elements>`, taču dara `die 'boom'`, kad elements ir `bad`. Ielieciet bloka iekšienē fāzeri `CATCH` tā, lai neizdevies elements tiktu ziņots kā `skipped (<elements>): <paziņojums>` un cikls turpinātos ar nākamo elementu, nevis apstātos.

## Piemērs

Programma izdrukā:

```
processed ok
skipped (bad): boom
processed ok
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
