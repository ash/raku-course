---
title: 'Soluzione: Descrivete una classe'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^name;
say Dog.^mro.elems;
say 'Cat' ∈ Dog.^mro.map(*.^name);
```

🦋 Trova il programma nel file [describe-a-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/describe-a-class.raku).

## Output

```
Dog
4
False
```

## Commenti

1. `.^name` restituisce il nome proprio della classe, `Dog`.

1. `.^mro` restituisce la catena di ereditarietà, e `.elems` la conta. Nella catena ci sono quattro tipi — `Dog`, il suo genitore `Animal` e gli universali `Any` e `Mu` — quindi il conteggio è `4`.

1. `.^mro.map(*.^name)` trasforma quella catena nell'elenco dei nomi di tipo, `(Dog Animal Any Mu)`. L'operatore di appartenenza insiemistica `∈` controlla poi se `Cat` è uno di essi. `Dog` non discende da alcun `Cat`, quindi la risposta è `False`.

{% include nav.html %}
