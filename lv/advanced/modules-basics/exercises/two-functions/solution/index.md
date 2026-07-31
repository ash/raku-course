---
title: 'Risinājums: Divas funkcijas vienā modulī'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam. Tas izmanto divus failus.

## Kods

Modulis `Calc.rakumod`:

```raku
unit module Calc;

sub add($a, $b) is export {
    $a + $b
}

sub mul($a, $b) is export {
    $a * $b
}
```

Programma `calc.raku`:

```raku
use Calc;

say add(3, 4);
say mul(3, 4);
```

🦋 Abus pirmkoda failus atrodiet direktorijā [exercises/advanced/modules-basics/two-functions](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/two-functions).

## Izvade

```console
$ raku -I. calc.raku
7
12
```

## Komentāri

1. Modulis var eksportēt tik apakšprogrammu, cik vēlaties; katra nes savu `is export` iezīmi.

1. Gan `add`, gan `mul` kļūst pieejamas programmā pēc viena `use Calc`.

{% include nav.html %}
