---
title: 'Solutio: Valor bloci do'
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Inveni codicem fontem in archivo [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Exitus

```
big
```

## Commentarii

1. Nudum `if` sententia est et valorem utilem non habet. Praefixum `do` totum `if`/`else` in expressionem convertit.

1. Quoniam `7 > 5` verum est, expressio `'big'` producit, quod ad `$label` assignatur. Idem artificium cum `do given` et `do for` operatur.

1. Copiae `{ }` non sunt optionales. `if` in Raku semper copiam accipit, ergo ramos in `if 7 > 5 'big' else 'small'` breviare non potes — hoc compilari deficit cum errore *Missing block*.

{% include nav.html %}
