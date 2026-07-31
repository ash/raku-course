---
title: 'Solution: Pulizia all''uscita'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Puoi trovare il codice sorgente nel file [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Output

```
Working
Cleanup
```

## Commenti

1. Dopo che `Working` viene stampato, il `return` esce immediatamente dalla subroutine, quindi `never reached` non viene mai stampato.

1. Anche se il corpo è stato abbandonato anticipatamente, il phaser `LEAVE` viene comunque eseguito durante l'uscita, stampando `Cleanup`. Questa garanzia è esattamente il motivo per cui `LEAVE` è il posto giusto per rilasciare le risorse: viene eseguito indipendentemente da come il blocco termina.

{% include nav.html %}
