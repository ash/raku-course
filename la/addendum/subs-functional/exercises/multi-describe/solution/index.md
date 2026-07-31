---
title: 'Solutio: Describere secundum genus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Inveni codicem fontem in archivo [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Exitus

```
integer 42
string hi
list of 3
```

## Commentarii

1. Unumquodque `multi` unam versionem ipsius `describe` cum genere parametri diverso dat.
Raku candidatum congruentem secundum genus argumenti eligit.

1. Signatura `@x` indici congruit, itaque ordo ad tertium candidatum distribuitur,
qui longitudinem suam nuntiat.

{% include nav.html %}
