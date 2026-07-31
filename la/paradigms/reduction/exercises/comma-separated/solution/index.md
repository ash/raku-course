---
title: 'Solutio: Index commis divisus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @words = 'Raku', 'is', 'fun';

say @words.reduce(-> $a, $b { "$a, $b" });
```

🦋 Inveni codicem fontem in archivo [comma-separated.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/comma-separated.raku).

## Exitus

```
Raku, is, fun
```

## Commentarii

1. Hic blocus valorem **aedificat** loco eius quod unum eligat: `$a` est catena adhuc composita et `$b` est verbum sequens, et `"$a, $b"` ea commate et spatio glutinat.

1. Prima vocatio `'Raku'` et `'is'` in `Raku, is` coniungit; secunda illud cum `'fun'` coniungit ut `Raku, is, fun` det. Hoc est genus coniunctionis separatoris consciae quod metaoperator `[~]` per se exprimere non potest.

1. In vero codice methodum inbuiltam `join` peteres, quae exacte hoc agit — `say @words.join(', ');` idem `Raku, is, fun` imprimit. Ratio exercitationis est eandem ideam ut blocum `reduce` exprimere exercere.

{% include nav.html %}
