---
title: 'Risinājums: Matemātikas modulis'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam. Tas izmanto divus failus.

## Kods

Modulis `Maths.rakumod`:

```raku
unit module Maths;

sub square($n) is export {
    $n * $n
}
```

Programma `maths.raku`:

```raku
use Maths;

say square(6);
```

🦋 Abus pirmkoda failus atrodiet direktorijā [exercises/advanced/modules-basics/maths-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/maths-module).

## Izvade

```console
$ raku -I. maths.raku
36
```

## Komentāri

1. Modulis atzīmē `square` ar `is export`, un tieši tas to padara pieejamu programmai, kas moduli izmanto.

1. Opcija `-I.` ieliek pašreizējo direktoriju moduļu meklēšanas ceļā, tāpēc Raku atrod `Maths.rakumod` blakus programmai.

{% include nav.html %}
