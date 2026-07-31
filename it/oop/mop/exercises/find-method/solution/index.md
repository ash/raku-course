---
title: 'Soluzione: Trovate un metodo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Animal {
    method speak { 'generic' }
}

class Dog is Animal {
}

say so Dog.^find_method('speak');
```

🦋 Trova il programma nel file [find-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/find-method.raku).

## Output

```
True
```

## Commenti

1. `.^find_method` restituisce il metodo se esiste, o un valore non definito se non esiste. Il `so` lo trasforma in un booleano semplice.

1. `Dog` non definisce metodi propri, eppure il risultato è `True`: `find_method` cerca in tutta la catena di ereditarietà e trova `speak` più in alto, in `Animal`. Questo rispecchia il modo in cui una vera chiamata di metodo su un `Dog` individuerebbe il metodo ereditato.

{% include nav.html %}
