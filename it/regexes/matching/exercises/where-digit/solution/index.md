---
title: "Soluzione: Dov'è la cifra"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $m = 'abc9x2z' ~~ /\d/;
say $m.from;
say $m.to;
```

🦋 Trova il programma nel file [where-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/where-digit.raku).

## Output

```
3
4
```

## Commenti

1. La classe `\d` riconosce una singola cifra. Il motore si ferma alla **prima** che trova — `9`, all'indice `3` (le posizioni si contano da zero); il `2` successivo non viene mai raggiunto.

1. `.from` dà l'inizio della corrispondenza, `3`, e `.to` dà la posizione subito dopo la sua fine, `4`. La differenza `.to - .from` è la lunghezza della corrispondenza: qui un carattere.

{% include nav.html %}
