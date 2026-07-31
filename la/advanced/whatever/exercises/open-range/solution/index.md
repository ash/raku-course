---
title: 'Solutio: Intervallum apertum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say (2, 4 ... *).head(4);
```

🦋 Inveni codicem fontem in archivo [open-range.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/open-range.raku).

## Exitus

```
(2 4 6 8)
```

## Commentarii

1. Semina `2, 4` gradum arithmeticum duorum statuunt, et `*` nuda ut finis significat seriem numquam desinere.

1. `head(4)` primos quattuor valores tantum extrahit, `2, 4, 6, 8`. Series pigra est, itaque cauda infinita numquam computatur — stella nuda hic significat «quidquid, sine ullo termino superiore».

{% include nav.html %}
