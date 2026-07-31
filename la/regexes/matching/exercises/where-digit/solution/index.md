---
title: 'Solutio: Ubi est numerus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $m = 'abc9x2z' ~~ /\d/;
say $m.from;
say $m.to;
```

🦋 Inveni codicem fontem in archivo [where-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/where-digit.raku).

## Exitus

```
3
4
```

## Commentarii

1. Classis `\d` unam cifram congruit. Machina ad **primam** quam invenit consistit — `9`, in indice `3` (loci a nulla numerantur); ad posteriorem `2` numquam pervenitur.

1. `.from` initium congruentiae dat, `3`, et `.to` locum statim post finem eius, `4`. Differentia `.to - .from` est longitudo congruentiae — unus character hic.

{% include nav.html %}
