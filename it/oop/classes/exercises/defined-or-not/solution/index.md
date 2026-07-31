---
title: 'Soluzione: Definito o no'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Trova il programma nel file [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Output

```
False
False
True
True
```

## Commenti

1. Il ciclo percorre un misto di oggetti di tipo (`Cat`, `Dog`) e istanze (`Cat.new`, `Dog.new`).

1. Entrambi gli oggetti di tipo non sono definiti, quindi `defined` restituisce `False` per loro; entrambe le istanze sono definite, quindi restituisce `True`. L'essere definito dipende dal fatto che un valore sia un oggetto di tipo o un'istanza vera — non dalla classe a cui appartiene.

{% include nav.html %}
