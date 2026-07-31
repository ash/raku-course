---
title: 'Solution: Cos''è?'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 Puoi trovare il codice sorgente nel file [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Output

```
True
False
```

## Commenti

1. `$a.WHAT` non e la stringa `Int` ma l'effettivo oggetto tipo `Int`, quindi `=== Int` lo confronta con il tipo stesso e restituisce `True`.

1. `$b` contiene una stringa, quindi il suo `WHAT` e `Str`; confrontandolo con `Int` si ottiene `False`. Questo e cio che rende `WHAT` utile nelle condizioni, non solo nella stampa.

{% include nav.html %}
