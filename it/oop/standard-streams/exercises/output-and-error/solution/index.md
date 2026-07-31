---
title: 'Soluzione: Output ed errori'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @data = 3, 5, 7;

my $sum = 0;
for @data -> $n {
    $sum += $n;
    $*ERR.say("running total: $sum");
}

$*OUT.say($sum);
```

🦋 Trova il programma nel file [output-and-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/output-and-error.raku).

## Output

Sullo schermo compaiono entrambi i flussi — prima i totali parziali, poi il risultato finale:

```
running total: 3
running total: 8
running total: 15
15
```

Se l'errore standard viene scartato, resta solo l'output vero:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Commenti

1. `$*OUT` e `$*ERR` sono gli handle dell'output standard e dell'errore standard. Ciascuno ha il proprio metodo `say`.

1. Ogni giro del ciclo aggiunge il numero successivo e scrive il totale corrente su `$*ERR`; solo la somma finale va su `$*OUT`. Sullo schermo l'avanzamento e il risultato si somigliano, ma viaggiano su flussi diversi — ed è per questo che redirigere altrove l'errore standard con `2>/dev/null` lascia solo il `15` finale.

{% include nav.html %}
