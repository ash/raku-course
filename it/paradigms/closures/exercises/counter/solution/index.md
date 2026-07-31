---
title: 'Soluzione: Un contatore'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 Trova il programma nel file [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Output

```
10
20
30
```

## Commenti

1. La chiusura cattura due cose da `make-counter`: il parametro `$step` e la variabile privata `$n`. Entrambe restano in vita dopo che `make-counter` è ritornata.

1. Ogni chiamata aggiunge `$step` a `$n` e restituisce il nuovo totale. Un contatore costruito con un passo diverso avanzerebbe invece di quella quantità.

{% include nav.html %}
