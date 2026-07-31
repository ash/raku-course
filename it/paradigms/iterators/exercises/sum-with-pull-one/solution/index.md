---
title: 'Soluzione: Sommare con pull-one'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $it = (3, 7, 5).iterator;
my $sum = 0;

loop {
    my $v := $it.pull-one;
    last if $v =:= IterationEnd;
    $sum += $v;
}

say $sum;
```

🦋 Trova il programma nel file [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Output

```
15
```

## Commenti

1. `.iterator` dà la vista a estrazione dell'elenco, e ogni `pull-one` restituisce il numero successivo.

1. Il valore viene **legato** con `:=`, non assegnato, così che `$v =:= IterationEnd` possa individuare correttamente la fine — un `=` di assegnamento confronterebbe il contenitore invece del valore. Il ciclo somma `3`, `7` e `5`, poi incontra `IterationEnd` e si ferma, lasciando `15`.

{% include nav.html %}
