---
title: 'Soluzione: Triplicare come metodo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Trova il programma nel file [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Output

```
21
```

## Commenti

1. Come metodo, `triple` appartiene all'oggetto e lavora con l'`n` dell'oggetto stesso — non gli viene passato nulla.

1. Rispetto alla versione con subroutine, i dati vivono nell'oggetto invece di arrivare come argomento. Entrambi danno `21`.

{% include nav.html %}
