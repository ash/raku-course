---
title: 'Solutio: Fasciculus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius operis.

## Codex

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Codicem fontem in archivo [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku) invenire potes.

## Exitus

```
0
212
```

## Commentarii

1. Tam variabilis quam subroutina cum `our` declaratae sunt, itaque ambae partes spatii nominum `Temperature` fiunt et ab extra attingibiles sunt.

1. Variabilis attingitur ut `$Temperature::freezing` — sigillum, nomen fasciculi, deinde nomen variabilis — dum subroutina vocatur ut `Temperature::fahrenheit(100)`. Conversio `100` dat `100 * 9/5 + 32`, quod est `212`.

1. Simplex `package` tantum spatium nominum praebet. Pro bibliotheca reusabili `module` adhibuissemus — et, cum obiecta in promptu sunt, `class` — sed mechanismus spatii nominum in unoquoque casu idem est.

{% include nav.html %}
