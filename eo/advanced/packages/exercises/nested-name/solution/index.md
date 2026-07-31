---
title: 'Solvo: Nestita nomo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 Vi povas trovi la fontkodon en la dosiero [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Eligo

```
10
20
```

## Komentoj

1. Nesti unu nomspacon ene de alia konstruas pli longan vojon `::`. Kaj la variablo kaj la subrutino loĝas du nivelojn profunde, en `Outer::Inner`.

1. La plena nomo `$Outer::Inner::base` atingas la variablon, kaj `Outer::Inner::doubled()` atingas la subrutinon tra la samaj du niveloj. Suba nomo portas neniun sigelon, do malsame ol la variablo ĝi havas neniun `$` antaŭe.

1. Ambaŭ membroj estas deklaritaj per `our`, kio estas tio, kio faras ilin videblaj ekster sia modulo. Deklaro per `my` estus teninta ilin privataj al `Inner`.

{% include nav.html %}
