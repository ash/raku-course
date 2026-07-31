---
title: 'Solutio: Symbolum quaerere'
translations_gpt: true
---

{% include menu.html %}

Ecce solutio possibilis huius muneris.

## Codex

Programma, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Utrumque archivum fontem in directorio [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol) invenire potes.

## Outputum

```console
$ raku -I. lookup.raku
3.14
```

## Commentarii

1. `Circle::` est stash moduli, et nomine ut clave utendo — `Circle::{'$pi'}` — valorem sub eo repositum depromit. Clavis sigillum includere debet, sicut nomina enumerata faciunt.

1. Hoc eundem valorem attingit ac qualificatum `$Circle::pi`, sed quia nomen est chorda ordinaria, tempore executionis computari potest potius quam in fonte scribi.

{% include nav.html %}
