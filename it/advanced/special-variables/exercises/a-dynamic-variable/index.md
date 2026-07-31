---
title: Una variabile dinamica
---

{% include menu.html %}

## Problema

Una variabile dinamica — scritta con il twigil `*` — viene cercata esplorando verso l'esterno lo stack delle chiamate, non tramite lo scope lessicale. Quindi il valore che una subroutine vede dipende da chi l'ha chiamata, il che permette a un blocco di eseguire il codice che chiama sotto un'identita' diversa.

1. Dichiara una variabile dinamica `$*user` con il valore `'guest'`.
2. Scrivi una subroutine `whoami` che stampa `running as ` seguito dal valore corrente di `$*user` (ad esempio, `running as guest`). Deve leggere `$*user` direttamente — non accetta parametri.
3. Chiama `whoami` una volta al livello superiore: riporta `guest`.
4. Poi, all'interno di un blocco che ridichiara `$*user` come `'admin'`, chiama la *stessa* `whoami` di nuovo: ora riporta `admin`.

## Esempio

Il programma stampa:

```
running as guest
running as admin
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
