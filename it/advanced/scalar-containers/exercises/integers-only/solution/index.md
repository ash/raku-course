---
title: 'Solution: Solo interi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my Int $cars;

$cars = 250.7.Int;
say $cars;
say $cars.WHAT;
```

🦋 Potete trovare il codice sorgente nel file [integers-only.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/integers-only.raku).

## Output

```
250
(Int)
```

## Commenti

1. Il vincolo di tipo `Int` in `my Int $cars` fa sì che il contenitore rifiuti qualsiasi valore che non sia un intero. Un'assegnazione diretta di `250.7` (un `Rat`) produrrebbe un errore in fase di compilazione.

1. Chiamare `.Int` sul valore razionale `250.7` lo converte nell'intero `250` eliminando la parte frazionaria. Il valore convertito è compatibile con il contenitore. Assicuratevi di non confondere questo comportamento con l'arrotondamento.

1. Lo pseudo-metodo `.WHAT` conferma che il valore memorizzato nel contenitore è di tipo `Int`.

{% include nav.html %}
