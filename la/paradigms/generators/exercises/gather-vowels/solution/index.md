---
title: 'Solutio: Cum condicione colligere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Inveni codicem fontem in archivo [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Exitus

```
[e u a i o]
```

## Commentarii

1. `.comb` verbum in singulos characteres dividit quos anulus ordine visitat.

1. `take` characterem solum tunc servat cum classi vocalium congruit, dans vocales eo ordine quo apparent.

{% include nav.html %}
