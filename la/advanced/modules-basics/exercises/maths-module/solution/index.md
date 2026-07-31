---
title: 'Solutio: Modulus mathematicus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis. Duobus archivis utitur.

## Codex

Modulus, `Maths.rakumod`:

```raku
unit module Maths;

sub square($n) is export {
    $n * $n
}
```

Programma, `maths.raku`:

```raku
use Maths;

say square(6);
```

🦋 Utrumque archivum fontem in directoria [exercises/advanced/modules-basics/maths-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/maths-module) invenies.

## Exitus

```console
$ raku -I. maths.raku
36
```

## Commentarii

1. Modulus `square` proprietate `is export` notat, quod illud programmati utenti praesto facit.

1. Optio `-I.` directoriam currentem in semitam quaesitionis modulorum ponit, itaque Raku `Maths.rakumod` iuxta programma invenit.

{% include nav.html %}
