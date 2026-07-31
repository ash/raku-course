---
title: 'Solution: Dopo ogni passo'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Puoi trovare il codice sorgente nel file [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Output

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Commenti

1. Il phaser `NEXT` e scritto per primo, ma viene eseguito alla *fine* di ogni iterazione, dopo che il corpo ha aggiunto il numero corrente a `$sum`.

1. Quindi dopo il primo passaggio `$sum` vale `1`, dopo il secondo vale `3` e dopo il terzo vale `6`. `NEXT` e l'equivalente nei cicli dell'esecuzione di qualcosa tra un'iterazione e l'altra, distinto da `FIRST` (una volta all'inizio) e `LAST` (una volta alla fine).

{% include nav.html %}
