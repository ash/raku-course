---
title: 'Soluzione: Applicate due volte'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Trova il programma nel file [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Output

```
18
```

## Commenti

1. Il parametro `&f` riceve una subroutine; l'`f($x)` interno viene dato in pasto all'`f(...)` esterno.

1. Triplicare `2` dà `6`, e triplicare di nuovo dà `18`.

{% include nav.html %}
