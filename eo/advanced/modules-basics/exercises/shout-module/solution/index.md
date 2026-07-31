---
title: 'Solvo: Krianta modulo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko. Ĝi uzas du dosierojn.

## Kodo

La modulo, `Shouter.rakumod`:

```raku
unit module Shouter;

sub shout($s) is export {
    $s.uc
}
```

La programo, `shout.raku`:

```raku
use Shouter;

say shout('hi');
```

🦋 Vi povas trovi ambaŭ fontdosierojn en la dosierujo [exercises/advanced/modules-basics/shout-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/shout-module).

## Eligo

```console
$ raku -I. shout.raku
HI
```

## Komentoj

1. La trajto `is export` faras `shout` videbla al ĉiu programo, kiu uzas la modulon.

1. La metodo `.uc` redonas la majusklan version de la ĉeno.

{% include nav.html %}
