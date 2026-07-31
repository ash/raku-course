---
title: 'Soluzione: Unite due liste in un hash'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Trova il programma nel file [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Output

```
Anna: 90
Bob: 85
Cara: 95
```

## Commenti

1. `Z=>` è il metaoperatore zip applicato al costruttore di coppie `=>`: percorre entrambe
le liste al passo e costruisce da ogni posizione una coppia `nome => punteggio`.

1. Assegnare quella lista di coppie a una variabile `%` crea un hash, che viene poi
stampato in ordine di chiave.

{% include nav.html %}
