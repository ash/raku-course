---
title: 'Forma postfissa di "for"'
---

{% include menu.html %}

Abbiamo già visto altri modificatori di istruzioni: [`if` e `else`](/it/essentials/conditional-checks/modifiers) e [`while` e `until`](/it/essentials/loops/modifiers). Ed è per questo motivo che possiamo fare una piccola celebrazione, poiché il design di Raku è molto coerente.

Con un corpo di ciclo breve, il ciclo `for` può essere scritto in forma postfissa:

```raku
.say for 1..7;
```

Come vedi, gli intervalli sono molto naturali quando usati con la forma postfissa di `for`.

Questo programma è equivalente a una variante più tradizionale:

```raku
for 1..7 -> $n {
    say $n;
}
```

Oppure, se viene utilizzata la variabile di ciclo predefinita, a:

```raku
for 1..7 {
    .say;
}
```

Qui, `.say` è la forma abbreviata di `$_.say`.


{% include nav.html %}