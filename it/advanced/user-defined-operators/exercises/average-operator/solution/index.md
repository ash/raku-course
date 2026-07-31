---
title: 'Solution: Operatore media'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
sub infix:<avg>($a, $b) {
    ($a + $b) / 2
}

say 4 avg 10;
```

🦋 Puoi trovare il codice sorgente nel file [average-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/average-operator.raku).

## Output

```
7
```

## Commenti

1. L'operatore è dichiarato come `infix:<avg>`, quindi viene scritto tra i suoi due operandi, proprio come `+` o `~`.

1. Il corpo somma i due operandi e divide per due. Per `4` e `10` il risultato è `7`.

{% include nav.html %}
