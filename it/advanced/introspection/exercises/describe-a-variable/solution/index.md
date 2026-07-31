---
title: 'Solution: Descrivere una variabile'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Puoi trovare il codice sorgente nel file [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Output

```
Str
Scalar
$lang
```

## Commenti

1. `.^name` restituisce il tipo del valore memorizzato nel contenitore, che e `Str`.

1. `.VAR` restituisce il contenitore sottostante, e `.^name` su di esso restituisce `Scalar`, il tipo del contenitore stesso.

1. `.VAR.name` restituisce il nome della variabile, `$lang`, incluso il sigillo. Nota che si tratta del metodo `name`, non del meta-metodo `^name` usato nelle prime due righe.

{% include nav.html %}
