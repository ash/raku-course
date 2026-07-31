---
title: 'Solution: Legare uno scalare'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Puoi trovare il codice sorgente nel file [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Output

```
9
1
```

## Commenti

1. Il binding con `:=` fa di `$bound` un altro nome per lo stesso contenitore di `$source`, piuttosto che una copia. Quindi modificare `$source` è visibile attraverso `$bound`, che stampa `9`.

1. L'assegnazione ordinaria con `=` copia il valore in un contenitore separato, quindi `$copy` non è influenzato dalla modifica successiva e stampa ancora `1`.

1. Vedere i due affiancati è proprio il punto: `:=` condivide un contenitore, `=` duplica il valore.

{% include nav.html %}
