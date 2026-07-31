---
title: Pianificare due controlli
translations_gpt:
---

{% include menu.html %}

## Problema

Scrivi un file di test che usi `plan` (non `done-testing`) per dichiarare in anticipo che contiene esattamente due controlli. Rendi quei controlli:

1. Con `is-deeply`, che l'ordinamento della lista `3, 1, 2` dia `[1, 2, 3]`.
1. Con `is`, che `10 % 3` sia uguale a `1`.

Dai a ciascun controllo una breve descrizione a tua scelta.

## Esempio

Con le descrizioni `sorted` e `remainder`, il programma stampa:

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
