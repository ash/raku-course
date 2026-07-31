---
title: 'Solution: Un modulo shout'
translations_gpt: La soluzione di 'Un modulo per gridare'
---

{% include menu.html %}

Ecco una possibile soluzione del compito. Utilizza due file.

## Codice

Il modulo, `Shouter.rakumod`:

```raku
unit module Shouter;

sub shout($s) is export {
    $s.uc
}
```

Il programma, `shout.raku`:

```raku
use Shouter;

say shout('hi');
```

🦋 Puoi trovare entrambi i file sorgente nella directory [exercises/advanced/modules-basics/shout-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/shout-module).

## Output

```console
$ raku -I. shout.raku
HI
```

## Commenti

1. Il tratto `is export` rende `shout` visibile a qualsiasi programma che usi il modulo.

1. Il metodo `.uc` restituisce la versione in maiuscolo della stringa.

{% include nav.html %}
