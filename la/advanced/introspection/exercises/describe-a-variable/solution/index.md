---
title: 'Solutio: Variabilem describere'
translations_gpt: Solutio exercitationis 'Describe variabilem'
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Inveni codicem fontem in archivo [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Exitus

```
Str
Scalar
$lang
```

## Commentarii

1. `.^name` typum valoris in receptaculo conditi reddit, qui est `Str`.

1. `.VAR` receptaculum subiacens reddit, et `.^name` in eo `Scalar` reddit — typum receptaculi ipsius.

1. `.VAR.name` nomen variabilis reddit, `$lang`, sigillum eius includens. Nota hanc esse methodum `name`, non meta-methodum `^name` in primis duabus lineis adhibitam.

{% include nav.html %}
