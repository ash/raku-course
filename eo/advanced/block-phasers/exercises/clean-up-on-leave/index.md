---
title: Purigi ĉe foriro
translations_gpt:
---

{% include menu.html %}

## Problemo

La vera forto de `LEAVE` estas, ke ĝi ruliĝas *kiel ajn* la bloko estas forlasita — inkluzive de frua `return`.

Skribu subrutinon `work`, kies korpo komenciĝas per fazilo `LEAVE`, kiu presas `Cleanup`. Poste, ankoraŭ ene de la subrutino, presu `Working`, tuj revenu per `return`, kaj metu linion `say 'never reached'` post la `return`. Voku la subrutinon. La frua `return` preterpasas tiun lastan linion, sed `Cleanup` tamen estas presata.

## Ekzemplo

La programo presas:

```
Working
Cleanup
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
