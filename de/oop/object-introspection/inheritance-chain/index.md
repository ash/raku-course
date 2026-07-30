---
title: Die Vererbungskette
translations_gpt:
---

{% include menu.html %}

Wenn eine Klasse von einer anderen erbt, können Sie nach der gesamten Kette der Typen fragen, auf denen sie aufbaut. Die Metamethode `.^mro` liefert diese Kette — der Name steht für _method resolution order_, die Reihenfolge, in der Raku nach einer Methode sucht.

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^mro; # ((Dog) (Animal) (Any) (Mu))
```

Von links gelesen: Ein `Dog` ist zuerst er selbst, dann ein `Animal` (sein Elternteil), dann `Any` und `Mu` — die beiden Typen, von denen ganz oben jedes Raku-Objekt erbt. Wenn Sie eine Methode auf einem `Dog` aufrufen, durchsucht Raku diese Liste von links nach rechts und nimmt die erste passende Methode, die es findet. Genau deshalb überschreibt die Methode eines Kindes die des Elternteils: Das Kind steht früher in der Kette.

Für eine Klasse ohne ausdrücklichen Elternteil ist die Kette kürzer — nur die Klasse selbst, gefolgt von `Any` und `Mu`.

{% include nav.html %}
