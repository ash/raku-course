---
title: 'Soluzione: Smistate in due array'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Trova il programma nel file [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Output

```
[4 7]
[42 100 15]
```

## Commenti

1. Il corpo del `whenever` è codice ordinario, quindi può fare più che raccogliere: qui **decide**, instradando ogni valore verso `@big` o `@small` man mano che arriva. Dentro ciascun array i valori mantengono l'ordine del flusso.

1. Il blocco react aspetta che il flusso sia concluso, quindi entrambi gli array sono completi prima di essere stampati.

{% include nav.html %}
