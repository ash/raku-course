---
title: 'Solution: Operatore percentuale'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 Puoi trovare il codice sorgente nel file [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Output

```
30
```

## Commenti

1. L'operatore prende la percentuale `$p` come operando sinistro e l'importo totale `$whole` come operando destro.

1. Moltiplicando `$whole` per `$p` e dividendo per `100` si ottiene la parte richiesta: `150 * 20 / 100` fa `30`.

{% include nav.html %}
