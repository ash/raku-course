---
title: 'Solutio: Concordare per typum'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 Inveni codicem fontem in archivo [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Exitus

```
rational
```

## Commentarii

1. Cum valor ad congruendum typus est, congruatio intelligens rogat num topicum *illius typi sit*. `3.14` non est `Int`, ergo prima `when` praeteritur.

1. Litterale decimale sicut `3.14` est `Rat` (numerus rationalis) in Raku, ergo secunda `when` congruit et programma imprimit `rational`.

{% include nav.html %}
