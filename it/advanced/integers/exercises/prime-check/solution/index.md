---
title: 'Solution: Primo o no'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
say 97.is-prime;
say 91.is-prime;
```

🦋 Puoi trovare il codice sorgente nel file [prime-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/prime-check.raku).

## Output

```
True
False
```

## Commenti

1. `97` non ha divisori diversi da `1` e se stesso, quindi `is-prime` restituisce `True`.

1. `91` sembra primo ma è `7 × 13`, quindi `is-prime` restituisce `False`. Il metodo esegue la fattorizzazione al posto tuo, che è proprio il motivo per cui esiste.

{% include nav.html %}
