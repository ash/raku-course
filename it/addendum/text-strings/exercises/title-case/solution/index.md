---
title: "Soluzione: Ogni parola con l'iniziale maiuscola"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Trova il programma nel file [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Output

```
The Lord Of The Rings
```

## Commenti

1. `.tc` («title-case») rende maiuscola la prima lettera di una stringa. L'operatore
hyper `>>.tc` lo applica a tutte le parole insieme, e `.join(' ')` ricompone la frase.

{% include nav.html %}
