---
title: 'Soluzione: Componete due funzioni'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Trova il programma nel file [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Output

```
12
```

## Commenti

1. I parametri `&f` e `&g` accettano qualunque cosa sia chiamabile — qui le funzioni
Whatever `* * 2` e `* + 1`.

1. `compose` restituisce una nuova funzione anonima `-> $x { f(g($x)) }`. Chiamarla su `5`
esegue prima `g` (`5 + 1`), poi `f` (`6 * 2`), dando `12`.

{% include nav.html %}
