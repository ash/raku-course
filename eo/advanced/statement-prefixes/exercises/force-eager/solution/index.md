---
title: 'Solvo: Devigi fervoron'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (1 .. Inf).is-lazy;
say (eager 1..3).is-lazy;
say (lazy 1..3).is-lazy;
```

🦋 Vi povas trovi la fontkodon en la dosiero [force-eager.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/force-eager.raku).

## Eligo

```
True
False
True
```

## Komentoj

1. Intervalo ĝis `Inf` ne povas esti komputata tutan samtempe, do ĝi estas maldiligenta: `.is-lazy` raportas `True`.

1. La prefikso `eager` devigas liston esti produktita tuj, do la rezulto ne plu estas maldiligenta — `.is-lazy` raportas `False`. Ĉi tio estas la rekta kontraŭaĵo de markado de listo kiel `lazy`.

1. Ne apliku `eager` al nelimigita intervalo: `eager 1 .. Inf` provas komputi ĉiun elementon samtempe, do la programo simple blokiĝas, konsumante pli kaj pli da memoro ĝis ĝi estas mortigita. `eager` estas sekura nur por listoj, pri kiuj vi scias, ke ili estas finitaj.

1. Ankaŭ la inverso funkcias: `lazy 1..3` markas eĉ mallongan, finitan intervalon kiel maldiligenta, do `.is-lazy` raportas `True`. La prefikso starigas la maldiligento-flagon sendepende de la grandeco de la listo — ĝi ne devas esti senfina por esti maldiligenta.

{% include nav.html %}
