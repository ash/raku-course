---
title: La catena di ereditarietà
translations_gpt:
---

{% include menu.html %}

Quando una classe eredita da un'altra, puoi chiedere l'intera catena di tipi su cui è costruita. Il metametodo `.^mro` restituisce questa catena: il nome sta per _method resolution order_, l'ordine in cui Raku cerca un metodo.

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^mro; # ((Dog) (Animal) (Any) (Mu))
```

Leggendo da sinistra: un `Dog` è prima se stesso, poi un `Animal` (il suo genitore), poi `Any` e `Mu` — i due tipi da cui ogni oggetto Raku eredita in cima a tutto. Quando chiami un metodo su un `Dog`, Raku percorre questo elenco da sinistra a destra e usa il primo metodo corrispondente che trova. È esattamente per questo che il metodo di una figlia sovrascrive quello della genitrice: la figlia compare prima nella catena.

Per una classe senza genitore esplicito la catena è più corta: solo la classe stessa, seguita da `Any` e `Mu`.

{% include nav.html %}
