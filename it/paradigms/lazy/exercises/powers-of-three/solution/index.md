---
title: 'Soluzione: Potenze di tre'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say (1, * * 3 ... *).head(5);
```

🦋 Trova il programma nel file [powers-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/powers-of-three.raku).

## Output

```
(1 3 9 27 81)
```

## Commenti

1. La chiusura `* * 3` è la regola per il termine successivo: prendi l'attuale e moltiplica per tre. Dare la regola esplicitamente è più affidabile che lasciarla indovinare all'operatore dai primi termini.

1. L'estremo `*` rende infinita la serie, e `.head(5)` ne prende i primi cinque.

{% include nav.html %}
