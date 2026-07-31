---
title: 'Solutio: Dynamicam superimponere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub log-it($msg) {
    say "$*prefix: $msg";
}

sub task {
    log-it('working');
}

{
    my $*prefix = 'INFO';
    task();
}

{
    my $*prefix = 'DEBUG';
    task();
}
```

🦋 Inveni codicem fontem in archivo [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Exitus

```
INFO: working
DEBUG: working
```

## Commentarii

1. `task` `log-it` vocat sed `$*prefix` numquam commemorat. Valor tamen ad `log-it` pervenit, quia quaesitio dynamica acervum vocationum foras sequitur — praeter `task` — usque ad eum qui tunc in acervo est.

1. Duae clausulae diversos valores ponunt, itaque *eadem* vocatio `task()` singulis vicibus aliud praefixum producit. Hoc est quod variabiles dynamicas utiles reddit: contextus in codicem alte nidificatum fluit sine hoc quod per singulas procedures medias ut argumentum traiciatur.

{% include nav.html %}
