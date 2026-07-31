---
title: 'Soluzione: Un attributo ereditato'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Vehicle {
    has $.wheels;
}

class Bike is Vehicle {
    has $.wheels = 2;
}

class Car is Vehicle {
    has $.wheels = 4;
}

say Bike.new.wheels;
say Car.new.wheels;
```

🦋 Trova il programma nel file [inherited-attribute.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/inherited-attribute.raku).

## Output

```
2
4
```

## Commenti

1. `Bike` e `Car` ereditano entrambe da `Vehicle` l'attributo `wheels` (e il suo accessore). Nessuna delle due ridichiara l'attributo da zero: gli danno solo un valore predefinito, rispettivamente `2` e `4`.

1. Poiché il valore predefinito è incorporato in ciascuna classe, puoi creare gli oggetti con un semplice `Bike.new` e `Car.new`, e l'accessore ereditato rilegge il numero giusto di ruote.

1. Puoi comunque passare il valore esplicitamente, per esempio `Car.new(wheels => 3)`, e un argomento esplicito scavalca il valore predefinito. Ma poiché una bici o un'auto arrivano molto probabilmente già con il loro numero abituale di ruote, i valori predefiniti tengono semplice il caso comune lasciando spazio all'eccezione occasionale.

{% include nav.html %}
