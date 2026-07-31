---
title: 'Solutio: Dynamica variabilis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $*user = 'guest';

sub whoami {
    say "running as $*user";
}

whoami();

{
    my $*user = 'admin';
    whoami();
}
```

🦋 Inveni codicem fontem in archivo [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Exitus

```
running as guest
running as admin
```

## Commentarii

1. Twigil `*` `$*user` dynamicam reddit. `whoami` eam numquam ut parametrum accipit — valorem foras per acervum vocationum quaerendo invenit, itaque prima vocatio `guest` praedefinitum nuntiat.

1. Clausula interior `$*user` ut `admin` per durationem illius clausulae iterum declarat. *Idem* `whoami` nunc `admin` videt, quia quaesitio dynamica eum sequitur quicumque tunc in acervo est. Variabilem dynamicam in circumscriptione superare est modus quo contextum ampliorem omnibus inde vocatis concedis — nullo `whoami` mutato.

{% include nav.html %}
