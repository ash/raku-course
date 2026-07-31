---
title: 'Soluzione: Aggiungete un metodo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Trova il programma nel file [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Output

```
Rex says woof
```

## Commenti

1. `.^add_method` attacca a runtime un nuovo metodo al metaoggetto della classe, dato come `method { … }` anonimo.

1. Il metodo aggiunto è un metodo vero della classe, quindi al suo interno `$.name` raggiunge l'attributo `name` dell'oggetto, esattamente come farebbe un metodo scritto nel corpo della classe. Dopo la chiamata, ogni `Dog` risponde a `.speak`.

{% include nav.html %}
