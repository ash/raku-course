---
title: 'Solutio: Quid est'
translations_gpt: Solutio exercitationis 'Quid est'
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 Inveni codicem fontem in archivo [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Exitus

```
True
False
```

## Commentarii

1. `$a.WHAT` non est series `Int` sed ipsum obiectum typi `Int`, ergo `=== Int` id contra typum ipsum comparat et `True` reddit.

1. `$b` seriem continet, ergo eius `WHAT` est `Str`; comparatio cum `Int` `False` dat. Hoc est quod `WHAT` utilem in condicionibus facit, non solum in impressionibus.

{% include nav.html %}
