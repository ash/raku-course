---
title: 'Solvo: Potencoj de du'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (1, 2, 4 ... Inf).head(8);
```

🦋 Vi povas trovi la fontkodon en la dosiero [powers-of-two.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/powers-of-two.raku).

## Eligo

```
(1 2 4 8 16 32 64 128)
```

## Komentoj

1. La tri komencaj valoroj `1, 2, 4` kreskas per multipliko, do `...` rekonas geometrian sekvencon; kun `Inf` kiel la fina punkto ĝi neniam haltas memstare.

1. `head(8)` eltiras nur la unuajn ok valorojn. Ĉar la sekvenco estas maldiligenta, la cetero neniam estas generata — kio estas la sola kialo, pro kiu senlima sekvenco estas sekura por skribi.

{% include nav.html %}
