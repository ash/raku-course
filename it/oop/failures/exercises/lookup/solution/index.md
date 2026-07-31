---
title: 'Soluzione: Trovato o non trovato'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub lookup($key) {
    fail 'no such key' if $key ne 'a';
    return 100;
}

my $r = lookup('z');
if $r.defined {
    say $r;
}
else {
    say 'not found';
    say "reason: {$r.exception.message}";
}
```

🦋 Trova il programma nel file [lookup.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/lookup.raku).

## Output

```
not found
reason: no such key
```

## Commenti

1. `lookup('z')` chiama `fail`, quindi restituisce un `Failure` non definito.

1. Poiché il risultato non è definito, il programma stampa `not found` invece di provare a usare il valore fallito.

1. Un `Failure` porta comunque con sé l'eccezione che descrive che cosa è andato storto. `$r.exception` la recupera — il che segna anche il fallimento come gestito, così non esploderà più tardi — e `.message` legge il testo passato a `fail`, `no such key`.

{% include nav.html %}
