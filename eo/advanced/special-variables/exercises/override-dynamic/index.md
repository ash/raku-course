---
title: Superregi la dinamikan
translations_gpt:
---

{% include menu.html %}

## Problemo

Montru kiel dinamika variablo fluas tra meza subrutino, kiu scias nenion pri ĝi.

Skribu subrutinon `log-it($msg)`, kiu presas la mesaĝon prefiksitan per dinamika variablo `$*prefix`. Skribu duan subrutinon `task`, kiu simple vokas `log-it('working')` — kaj neniam mencias `$*prefix` mem. Poste voku `task` dufoje, ĉiufoje el ene de bloko, kiu agordas `$*prefix` al malsama valoro (`INFO`, poste `DEBUG`).

## Ekzemplo

La programo presas:

```
INFO: working
DEBUG: working
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
