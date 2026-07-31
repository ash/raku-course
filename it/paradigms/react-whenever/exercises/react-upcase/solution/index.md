---
title: 'Soluzione: Maiuscolo con react'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Trova il programma nel file [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Output

```
[A B C]
```

## Commenti

1. Il corpo del `whenever` gira una volta per valore, rendendolo maiuscolo e spingendolo in `@collected`.

1. `react` aspetta che l'unico supply finisca, quindi quando il `say` gira l'array contiene tutti e tre i valori in ordine: `[A B C]`.

1. Un supply ha metodi simili a quelli degli elenchi, quindi potresti rendere maiuscolo nel flusso invece che nel corpo — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` — e l'effetto è lo stesso. `.map` su un supply trasforma ogni valore mentre scorre; la scelta è semplicemente se la trasformazione appartenga al flusso o alla reazione.

{% include nav.html %}
