---
title: 'Solution: Un nome annidato'
translations_gpt: true
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

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

🦋 Puoi trovare il codice sorgente nel file [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Output

```
10
20
```

## Commenti

1. Annidare un namespace all'interno di un altro costruisce un percorso `::` più lungo. Sia la variabile che la subroutine si trovano a due livelli di profondità, in `Outer::Inner`.

1. Il nome completo `$Outer::Inner::base` raggiunge la variabile, e `Outer::Inner::doubled()` raggiunge la subroutine attraverso gli stessi due livelli. Il nome di una sub non ha sigillo, quindi a differenza della variabile non ha `$` davanti.

1. Entrambi i membri sono dichiarati con `our`, che è ciò che li rende visibili fuori dal loro modulo. Una dichiarazione `my` li avrebbe mantenuti privati all'interno di `Inner`.

{% include nav.html %}
