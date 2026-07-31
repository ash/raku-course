---
title: 'Solution: Il valore predefinito nativo'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my num $n;
my str $s;

say $n;
say "[$s]";
```

🦋 Puoi trovare il codice sorgente nel file [native-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-default.raku).

## Output

```
0
[]
```

## Commenti

1. Un `num` nativo non può essere indefinito, quindi come un `int` nativo inizia a `0` anziché a `(Num)`.

1. Una `str` nativa inizia come stringa vuota, ed è per questo che le parentesi quadre appaiono senza nulla tra di esse. Nessuno dei tipi nativi contiene mai un valore indefinito.

1. Gli specificatori di tipo sono essenziali qui. Rimuovendoli — scrivendo `my $n; my $s;` — le variabili diventano contenitori ordinari che iniziano come *indefiniti* (`Any`). In quel caso `say $n` stampa `(Any)`, e interpolare la `$s` indefinita genera l'avviso *"Use of uninitialized value … in string context"*. Sono i tipi nativi `num` e `str` a garantire i valori predefiniti `0` e stringa vuota.

{% include nav.html %}
