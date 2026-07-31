---
title: 'Solution: Il valore predefinito del contenitore'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Puoi trovare il codice sorgente nel file [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Output

```
0
0
```

## Commenti

1. Il trait `is default(0)` assegna al contenitore un valore predefinito. Poiche non e stato assegnato nulla, la lettura di `$count` restituisce quel valore predefinito, quindi la prima riga stampa `0`.

1. `.VAR.default` chiede al contenitore stesso il suo valore predefinito dichiarato, che e anch'esso `0`. Senza il trait, un contenitore non tipizzato avrebbe avuto come valore predefinito `(Any)`.

{% include nav.html %}
