---
title: Ziņojiet un atgūstieties
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Parādiet, kā `CATCH` ļauj programmai atkopties un turpināt ar saprātīgu noklusējumu.

Deklarējiet mainīgo `$timeout` ar noklusējuma vērtību `30` pirms bloka. Bloka iekšienē izpildiet `die 'config missing'` un pēc tam (rindā, kas nekad netiks sasniegta) mēģiniet uzstādīt `$timeout` uz `60`. Izmantojiet fāzeri `CATCH`, kura bloks `default` izdrukā `warning: <paziņojums>; keeping default`. Aiz bloka izdrukājiet `timeout is <timeout> seconds`.

## Piemērs

Programma izdrukā:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
