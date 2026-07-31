---
title: 'Solution: Tipizzato o non tipizzato'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $untyped;
my Int $typed;

dd $untyped;
dd $typed;

$untyped = 42;
$typed = 42;

dd $untyped;
dd $typed;
```

🦋 Potete trovare il codice sorgente nel file [reuse-the-container.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/reuse-the-container.raku).

## Output

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Commenti

1. `dd` riporta i due contenitori in modo diverso. Per quello non tipizzato stampa solo `$untyped`, mentre per quello tipizzato prefissa il tipo dichiarato: `Int $typed`. Quel prefisso è esattamente la differenza che fa un tipo dichiarato.

1. Anche i valori vuoti differiscono. Un contenitore non tipizzato inizia con il valore indefinito generico `Any`, mentre un contenitore tipizzato inizia con il valore indefinito del *suo* tipo, `Int`.

1. Dopo che ad entrambi è stato assegnato `42`, i valori appaiono uguali, ma `$typed` conserva comunque il suo tipo e rifiuterebbe un valore non intero — a differenza di `$untyped`, che accetta qualsiasi cosa.

{% include nav.html %}
