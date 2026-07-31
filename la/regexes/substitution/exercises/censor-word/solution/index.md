---
title: 'Solutio: Verbum censura'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Inveni codicem fontem in archivo [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Exitus

```
*** *** plan
```

## Commentarii

1. Operator `s///` congruens `secret` textu litterali `***` sine virgulis scripto permutat, et `$s` in loco mutat.

1. Adverbium `:g` est id quod **utramque** occurrentiam permutari facit. Sine eo solum primum `secret` censeretur.

{% include nav.html %}
