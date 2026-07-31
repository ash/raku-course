---
title: 'Solution: Raccogliere fino al pieno'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
my $sum = 0;
my @result = gather for 1..100 {
    $sum += $_;
    last if $sum > 10;
    take $_;
}

say @result;
```

🦋 Puoi trovare il codice sorgente nel file [gather-big.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/gather-big.raku).

## Output

```
[1 2 3 4]
```

## Commenti

1. Al ciclo viene dato un intervallo di cento numeri, molti piu di quanti ne utilizzera. Non e un problema perche il ciclo si interrompe da solo: non appena `$sum` supera `10`, `last` esce e i numeri restanti non vengono mai visitati.

1. L'ordine all'interno del blocco e importante. Prima si aggiunge a `$sum` e si controlla il limite prima di prendere, cosi il numero che fa superare il totale di `10` (qui, `5`) non viene raccolto. Il totale progressivo raggiunge esattamente `10` dopo `4`, quindi la lista raccolta e `1, 2, 3, 4`.

1. Questa uscita anticipata con `for` e cio che `gather`/`take` puo fare e `grep` no: `grep` scorre sempre l'intera lista, mentre qui si sceglie quando fermarsi.

{% include nav.html %}
