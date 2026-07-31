---
title: 'Soluzione: Un accumulatore progressivo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 Trova il programma nel file [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Output

```
110
135
130
```

## Commenti

1. Il blocco restituito *si chiude su* `$total`: quella variabile sopravvive fra una
chiamata e l'altra, quindi ogni chiamata ricorda il totale della precedente.

1. `$total += $amount` aggiorna la somma corrente e la restituisce insieme, ed è ciò che
ogni `say` stampa: `110`, poi `135`, poi `130`.

1. Un'alternativa tiene il totale dentro il blocco stesso, in una variabile `state`. A
differenza di un `my` ordinario, una variabile `state` viene inizializzata una volta sola
— al primo giro del blocco — e poi conserva il proprio valore attraverso le chiamate
successive:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Ogni chiamata a `make-accumulator` produce un blocco fresco con il proprio
    `state $total`, quindi accumulatori separati restano indipendenti — e la chiusura su
    `$start` fornisce comunque a ciascuno il proprio valore di partenza.

{% include nav.html %}
