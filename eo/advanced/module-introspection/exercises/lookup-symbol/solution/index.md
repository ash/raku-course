---
title: 'Solvo: Serĉi simbolon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

La programo, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Vi povas trovi ambaŭ fontdosierojn en la dosierujo [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol).

## Eligo

```console
$ raku -I. lookup.raku
3.14
```

## Komentoj

1. `Circle::` estas la simboltabelo de la modulo, kaj uzi nomon kiel ŝlosilon — `Circle::{'$pi'}` — prenas la valoron konservitan sub ĝi. La ŝlosilo devas inkludi la sigelon, same kiel la listigitaj nomoj faras.

1. Tio atingas la saman valoron kiel la kvalifikita `$Circle::pi`, sed ĉar la nomo estas ordinara ĉeno, ĝi povas esti kalkulita dum rultempo anstataŭ esti skribita en la fontkodo.

{% include nav.html %}
