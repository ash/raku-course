---
title: 'Soluzione: Collegatevi a una lista'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 Trova il programma nel file [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Output

```
red
green
blue
```

## Commenti

1. `Supply.from-list` emette le tre stringhe in ordine.

1. La presa gira una volta per ciascuna, stampandola.

{% include nav.html %}
