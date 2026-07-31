---
title: 'Solution: Due funzioni in un modulo'
translations_gpt: La soluzione di 'Due funzioni in un modulo'
---

{% include menu.html %}

Ecco una possibile soluzione del compito. Utilizza due file.

## Codice

Il modulo, `Calc.rakumod`:

```raku
unit module Calc;

sub add($a, $b) is export {
    $a + $b
}

sub mul($a, $b) is export {
    $a * $b
}
```

Il programma, `calc.raku`:

```raku
use Calc;

say add(3, 4);
say mul(3, 4);
```

🦋 Puoi trovare entrambi i file sorgente nella directory [exercises/advanced/modules-basics/two-functions](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/two-functions).

## Output

```console
$ raku -I. calc.raku
7
12
```

## Commenti

1. Un modulo puo esportare quante subroutine si desidera; ognuna porta il proprio tratto `is export`.

1. Sia `add` che `mul` diventano disponibili nel programma dopo un singolo `use Calc`.

{% include nav.html %}
