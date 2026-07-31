---
title: react e whenever
translations_gpt:
---

{% include menu.html %}

Attingere a un solo supply va bene, ma i programmi reattivi veri osservano spesso **parecchi** flussi insieme e reagiscono a quello che produce il valore successivo. Raku ha una sintassi dedicata a questo: il blocco `react`, con al suo interno uno o più blocchi `whenever`.

Un blocco `react` predispone le reazioni e poi aspetta, eseguendo il corpo di ogni `whenever` man mano che il suo supply emette — finché tutti i supply non sono conclusi. Questa sezione mostra come i due lavorano insieme.

{% include nav.html %}
