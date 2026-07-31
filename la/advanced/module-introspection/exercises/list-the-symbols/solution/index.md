---
title: 'Solutio: Symbola enumerare'
translations_gpt: true
---

{% include menu.html %}

Ecce solutio possibilis huius muneris.

## Codex

Programma, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Utrumque archivum fontem in directorio [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols) invenire potes.

## Outputum

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Commentarii

1. `Circle::` est fasciculus moduli, et `.keys` nomina quae continet enumerat, unumquodque sigillum suum includens.

1. `.elems` illa nomina numerat — modulus duas variabiles `our` definit, itaque numerus est `2`.

1. `.keys` nullum ordinem certum praestat, itaque `.sort` applicamus ut stabile, alphabeticum resultatum `($pi $tau)` obtineamus. Sine ordinatione, duo nomina in quolibet ordine inter cursus prodire possunt.

{% include nav.html %}
