---
title: Dipendenti e ruoli
translations_gpt:
---

{% include menu.html %}

## Problema

Definisci una classe base `Employee` con un attributo `name`, un metodo `role` che restituisce `'staff'` e un metodo `badge` che restituisce la stringa `<nome> - <ruolo>` (usando il proprio `role`).

Poi definisci due classi figlie, `Manager` e `Intern`, che ereditano da `Employee` e sovrascrivono `role` per restituire rispettivamente `'manager'` e `'intern'`.

Stampa il badge di una manager di nome `Anna` e di uno stagista di nome `Bob`.

## Esempio

Il programma stampa:

```
Anna - manager
Bob - intern
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
