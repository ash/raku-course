---
title: 'Solutio: Omnia argumenta summam'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub total(*@nums) {
    [+] @nums
}

say total(3, 5, 7);
```

🦋 Inveni codicem fontem in archivo [sum-all-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/sum-all-arguments.raku).

## Exitus

```
15
```

## Commentarii

1. Parametrus sorbens `*@nums` omnia argumenta in ordinem `@nums` colligit, quotcumque sint.

1. Metaoperator reductionis `[+]` deinde omnia simul addit, unde `15`.

{% include nav.html %}
