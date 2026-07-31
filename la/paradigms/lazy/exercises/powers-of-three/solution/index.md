---
title: 'Solutio: Potentiae trium'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say (1, * * 3 ... *).head(5);
```

🦋 Inveni codicem fontem in archivo [powers-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/powers-of-three.raku).

## Exitus

```
(1 3 9 27 81)
```

## Commentarii

1. Clausura `* * 3` regula termini sequentis est: cape currentem et per tria multiplica. Regulam expresse dare certius est quam operatorem eam ex primis paucis terminis divinare sinere.

1. Finis `*` seriem infinitam facit, et `.head(5)` primas quinque sumit.

{% include nav.html %}
