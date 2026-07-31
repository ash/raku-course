---
title: 'Solutio: Clausura super externo'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio operis.

## Codex

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 Codicem fontem in archivo [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku) invenire potes.

## Exitus

```
Hello, Anna!
```

## Commentarii

1. `message` nullos argumentos accipit, tamen `$name` uti potest. Subroutina inclusa super variabiles lexicales subroutinae continentis claudit, itaque `$name` exterior in ambitu est.

1. Cum `greet('Anna')` currit, `$name` est `'Anna'`, ergo `message` `Hello, Anna!` reddit. Haec communicatio ambitus circumdantis est quod subroutinas auxiliares inclusas plus quam functiones occultas facit.

{% include nav.html %}
