---
title: 'Solvo: Matematika modulo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko. Ĝi uzas du dosierojn.

## Kodo

La modulo, `Maths.rakumod`:

```raku
unit module Maths;

sub square($n) is export {
    $n * $n
}
```

La programo, `maths.raku`:

```raku
use Maths;

say square(6);
```

🦋 Vi povas trovi ambaŭ fontdosierojn en la dosierujo [exercises/advanced/modules-basics/maths-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/maths-module).

## Eligo

```console
$ raku -I. maths.raku
36
```

## Komentoj

1. La modulo markas `square` per `is export`, kio estas tio, kio faras ĝin disponebla al la programo, kiu uzas ĝin.

1. La opcio `-I.` metas la nunan dosierujon sur la modulan serĉvojon, do Raku trovas `Maths.rakumod` apud la programo.

{% include nav.html %}
