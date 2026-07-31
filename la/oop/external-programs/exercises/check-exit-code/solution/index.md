---
title: 'Solutio: Codicem exitus inspice'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Inveni codicem fontem in archivo [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Exitus

```
4
failure
```

## Commentarii

1. `run` `Proc` reddit. Illud in `$proc` servare — et deinde legere — hic refert: imperatum deficiens cuius `Proc` abicitur iaceret, sed effectum inspicere pro tractato habetur.

1. `.exitcode` est numerus quem imperatum reddidit: `4`. `Proc` ut Booleanam probare quaestioni simpliciori respondet — verum est solum cum codex exeundi est `0`, itaque hic falsum est et programma `failure` imprimit.

{% include nav.html %}
