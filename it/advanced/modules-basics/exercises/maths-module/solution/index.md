---
title: 'Solution: Un modulo di matematica'
translations_gpt: La soluzione di 'Un modulo di matematica'
---

{% include menu.html %}

Ecco una possibile soluzione del compito. Utilizza due file.

## Codice

Il modulo, `Maths.rakumod`:

```raku
unit module Maths;

sub square($n) is export {
    $n * $n
}
```

Il programma, `maths.raku`:

```raku
use Maths;

say square(6);
```

🦋 Puoi trovare entrambi i file sorgente nella directory [exercises/advanced/modules-basics/maths-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/maths-module).

## Output

```console
$ raku -I. maths.raku
36
```

## Commenti

1. Il modulo contrassegna `square` con `is export`, che e cio che la rende disponibile al programma che lo usa.

1. L'opzione `-I.` aggiunge la directory corrente al percorso di ricerca dei moduli, cosi Raku trova `Maths.rakumod` accanto al programma.

{% include nav.html %}
