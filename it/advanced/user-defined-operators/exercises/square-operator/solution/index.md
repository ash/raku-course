---
title: 'Solution: Un operatore di elevamento al quadrato'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
sub postfix:<²>($x) {
    $x ** 2
}

say 5²;
```

🦋 Puoi trovare il codice sorgente nel file [square-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/square-operator.raku).

## Output

```
25
```

## Commenti

1. L'operatore è dichiarato come `postfix:<²>`, quindi il suo simbolo — il carattere apice-due — viene scritto dopo l'operando, come in `5²`.

1. Il corpo eleva l'operando alla seconda potenza, quindi `5²` restituisce `25`. Nulla impedisce di usare un simbolo Unicode che rispecchi la notazione matematica.

{% include nav.html %}
