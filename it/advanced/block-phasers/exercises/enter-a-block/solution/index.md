---
title: 'Solution: Entrare in un blocco'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 Puoi trovare il codice sorgente nel file [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Output

```
--entering
body 1
--entering
body 2
```

## Commenti

1. `ENTER` viene eseguito ogni volta che si entra nel blocco, appena prima del suo corpo. Poiche il ciclo entra nel suo corpo una volta per iterazione, `--entering` viene stampato prima di ogni riga `body`.

1. Questa e la differenza tra `ENTER` e `FIRST`: `FIRST` verrebbe eseguito una sola volta per l'intero ciclo, mentre `ENTER` viene eseguito ad ogni ingresso.

{% include nav.html %}
