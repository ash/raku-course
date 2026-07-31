---
title: Tipi a livello macchina
---

{% include menu.html %}

I tipi nativi hanno nomi in minuscolo: `int`, `num` e `str`. Si dichiara una variabile con uno di essi esattamente come si farebbe con `Int` o `Str`:

```raku
my int $i = 42;
my num $n = 3.14e0;
say $i; # 42
say $n; # 3.14
```

Un valore nativo corrisponde direttamente a un registro o una parola della macchina, senza l'oggetto wrapper che un normale valore Raku porta con sé. Questo rende i tipi nativi più veloci e più compatti, il che conta nei cicli numerici intensivi e negli array di grandi dimensioni.

C'è un comportamento da tenere presente fin da subito: una variabile nativa non può mai essere indefinita. Mentre un normale contenitore `Int` inizia come `Any` indefinito, un `int` nativo inizia a **zero**:

```raku
say (my Int $a); # (Int)
say (my int $b); # 0
```

Lo stesso vale per gli array nativi, dichiarati mettendo il tipo nativo prima della variabile `@`:

```raku
my int @numbers = 10, 20, 30;
say @numbers.sum; # 60
```

Un array di questo tipo memorizza i suoi elementi come interi macchina grezzi anziché come oggetti `Int` boxed, quindi usa meno memoria. Quando si introspeziona un valore nativo, viene automaticamente _boxed_ nel tipo completo corrispondente, ed è per questo che `(my int $b).WHAT` restituisce `(Int)`.

{% include nav.html %}
