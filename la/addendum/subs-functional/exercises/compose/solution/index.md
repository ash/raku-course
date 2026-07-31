---
title: 'Solutio: Duas functiones compone'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Inveni codicem fontem in archivo [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Exitus

```
12
```

## Commentarii

1. Parametri `&f` et `&g` quaslibet res vocabiles accipiunt — hic functiones Whatever
`* * 2` et `* + 1`.

1. `compose` novam functionem anonymam `-> $x { f(g($x)) }` reddit. Illam in
`5` vocare `g` primum currit (`5 + 1`), deinde `f` (`6 * 2`), dans `12`.

{% include nav.html %}
