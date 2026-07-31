---
title: 'Solutio: Duo argumenta addere'
translations_gpt: true
---

{% include menu.html %}

Ecce solutio possibilis huius muneris.

## Codex

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

🦋 Codicem fontem in fasciculo [two-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/two-arguments.raku) invenire potes.

## Exitus

```console
$ raku two-arguments.raku 2 3
5
```

## Commentarii

1. Duo parametri positionales duo verba e linea mandati accipiunt.

1. Argumenta lineae mandati ut litterae adveniunt, sed operator `+` ea in numeros convertit, itaque `2` et `3` summam `5` efficiunt.

{% include nav.html %}
