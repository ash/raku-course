---
title: 'Solution: Forzare la valutazione eager'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
say (1 .. Inf).is-lazy;
say (eager 1..3).is-lazy;
say (lazy 1..3).is-lazy;
```

🦋 Il codice sorgente è disponibile nel file [force-eager.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/force-eager.raku).

## Output

```
True
False
True
```

## Commenti

1. Un intervallo fino a `Inf` non può essere calcolato tutto in una volta, quindi è lazy: `.is-lazy` restituisce `True`.

1. Il prefisso `eager` forza una lista a essere prodotta immediatamente, quindi il risultato non è più lazy — `.is-lazy` restituisce `False`. Questo è il corrispettivo diretto di contrassegnare una lista come `lazy`.

1. Non applicate `eager` a un intervallo illimitato: `eager 1 .. Inf` cerca di calcolare ogni elemento in una volta sola, quindi il programma semplicemente si blocca, consumando sempre più memoria fino a essere terminato. `eager` è sicuro solo su liste che sapete essere finite.

1. Anche l'inverso funziona: `lazy 1..3` contrassegna anche un intervallo corto e finito come lazy, quindi `.is-lazy` restituisce `True`. Il prefisso imposta il flag di pigrizia indipendentemente da quanto piccola sia la lista — non deve essere infinita per essere lazy.

{% include nav.html %}
