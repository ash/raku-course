---
title: 'Solution: Dump della struttura dati'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Puoi trovare il codice sorgente nel file [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Output

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Commenti

1. `dd @data` stampa una rappresentazione simile a codice del contenuto dell'array. Va sul flusso di errore standard.

1. Il metodo `.raku` restituisce la stessa rappresentazione come stringa, che viene poi incorporata in un messaggio normale usando l'interpolazione del codice e stampata con `say` sullo standard output.

1. Le due righe qui sembrano uguali, ma passano attraverso flussi di output diversi: la prima proviene da `dd` (standard error), la seconda da `say` (standard output). Confronta quanto segue:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
