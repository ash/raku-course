---
title: 'Solutio: Series fluxuum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Inveni codicem fontem in archivo [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Exitus

```
[8 10 12 14 16]
```

## Commentarii

1. Primus gradus numeros maiores quam `3` servat (id est `4, 5, 6, 7, 8`); secundus unumquemque duplicat.

1. Unusquisque `==>` effectum suum ad gradum sequentem tradit, et ultimus illum in `@result` colligit.

{% include nav.html %}
