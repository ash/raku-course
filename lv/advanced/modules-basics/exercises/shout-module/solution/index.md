---
title: 'Risinājums: Kliegšanas modulis'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam. Tas izmanto divus failus.

## Kods

Modulis `Shouter.rakumod`:

```raku
unit module Shouter;

sub shout($s) is export {
    $s.uc
}
```

Programma `shout.raku`:

```raku
use Shouter;

say shout('hi');
```

🦋 Abus pirmkoda failus atrodiet direktorijā [exercises/advanced/modules-basics/shout-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/shout-module).

## Izvade

```console
$ raku -I. shout.raku
HI
```

## Komentāri

1. Iezīme `is export` padara `shout` redzamu ikvienai programmai, kas moduli izmanto.

1. Metode `.uc` atgriež virknes variantu ar lielajiem burtiem.

{% include nav.html %}
