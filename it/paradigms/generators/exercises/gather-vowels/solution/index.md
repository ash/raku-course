---
title: 'Soluzione: Raccogliere con una condizione'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Trova il programma nel file [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Output

```
[e u a i o]
```

## Commenti

1. `.comb` divide la parola in singoli caratteri che il ciclo visita in ordine.

1. `take` conserva un carattere solo quando corrisponde alla classe delle vocali, dando le vocali nell'ordine in cui compaiono.

{% include nav.html %}
