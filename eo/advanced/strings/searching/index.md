---
title: Serĉado en ĉenoj
translations_gpt:
---

{% include menu.html %}

Pluraj metodoj respondas demandojn pri tio, kion ĉeno enhavas.

La metodo `contains` diras, ĉu unu ĉeno aperas ie ajn ene de alia:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

La metodoj `starts-with` kaj `ends-with` kontrolas la komencon kaj la finon de ĉeno:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Kiam vi bezonas la ekzaktan pozicion de subĉeno, uzu `index`. Ĝi redonas la indekson de la unua kongruo, nombrante ekde nulo:

```raku
say 'Raku'.index('k'); # 2
```

Se la subĉeno ne estas trovita, `index` redonas `Nil` anstataŭ nombron:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
