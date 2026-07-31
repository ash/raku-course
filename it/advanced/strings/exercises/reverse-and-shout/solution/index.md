---
title: 'Solution: Inverti e urla'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
say 'raku'.flip.uc;
```

🦋 Puoi trovare il codice sorgente nel file [reverse-and-shout.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/reverse-and-shout.raku).

## Output

```
UKAR
```

## Commenti

1. I metodi vengono applicati da sinistra a destra: `flip` prima inverte `'raku'` in `'ukar'`, e poi `uc` lo trasforma in `'UKAR'`.

1. Poiche ogni metodo restituisce una nuova stringa, e possibile concatenarli in una singola espressione.

{% include nav.html %}
