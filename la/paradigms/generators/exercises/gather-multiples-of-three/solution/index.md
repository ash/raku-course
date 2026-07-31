---
title: 'Solutio: Multiplos trium collige'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Inveni codicem fontem in archivo [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Exitus

```
[3 6 9 12 15]
```

## Commentarii

1. Anulus omnem numerum visitat, sed `take` solum tunc currit cum `$_ %% 3` verum est.

1. Itaque soli multipli trium in indicem colliguntur.

{% include nav.html %}
