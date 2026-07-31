---
title: 'Solutio: Praedefinitum nativum'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my num $n;
my str $s;

say $n;
say "[$s]";
```

🦋 Inveni codicem fontem in archivo [native-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-default.raku).

## Exitus

```
0
[]
```

## Commentarii

1. Nativus `num` indefinitus esse non potest, itaque sicut nativus `int` a `0` incipit potius quam a `(Num)`.

1. Nativus `str` ut chorda vacua incipit, quare parentheses quadratae sine ullo inter eas apparent. Nullus typorum nativorum umquam valorem indefinitum continet.

1. Specificatores typorum hic essentiales sunt. Eos omitte — scribe `my $n; my $s;` — et variabiles ordinaria receptacula fiunt quae *indefinite* (`Any`) incipiunt. Tunc `say $n` imprimit `(Any)`, et interpolatio indefiniti `$s` monet *"Use of uninitialized value … in string context"*. Typi nativi `num` et `str` sunt qui valores defaltarum `0` et chordae vacuae garantiunt.

{% include nav.html %}
