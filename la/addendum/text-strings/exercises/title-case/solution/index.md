---
title: 'Solutio: Quodque verbum littera maiore'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Inveni codicem fontem in archivo [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Exitus

```
The Lord Of The Rings
```

## Commentarii

1. `.tc` («title-case») primam litteram catenae in maiusculam vertit. Operator
hyper `>>.tc` illam omni verbo simul applicat, et `.join(' ')` sententiam
rursus componit.

{% include nav.html %}
