---
title: 'Solutio: Modulus clamans'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis. Duobus archivis utitur.

## Codex

Modulus, `Shouter.rakumod`:

```raku
unit module Shouter;

sub shout($s) is export {
    $s.uc
}
```

Programma, `shout.raku`:

```raku
use Shouter;

say shout('hi');
```

🦋 Utrumque archivum fontem in directoria [exercises/advanced/modules-basics/shout-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/shout-module) invenies.

## Exitus

```console
$ raku -I. shout.raku
HI
```

## Commentarii

1. Proprietas `is export` `shout` cuilibet programmati quod modulo utitur conspicuum facit.

1. Methodus `.uc` versionem chordae litteris maiusculis reddit.

{% include nav.html %}
