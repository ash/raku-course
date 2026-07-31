---
title: 'Soluzione: Un valore di ripiego'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Trova il programma nel file [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Output

```
5
default
```

## Commenti

1. `get(5)` restituisce normalmente `5`, quindi `//` lo conserva.

1. `get(0)` restituisce un `Failure` non definito, quindi `//` ripiega su `'default'`. Poiché un `Failure` non è definito, `//` lo gestisce in silenzio, senza sollevare nulla.

{% include nav.html %}
