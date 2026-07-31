---
title: 'Solution: Cercare un simbolo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

Il programma, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Puoi trovare entrambi i file sorgente nella directory [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol).

## Output

```console
$ raku -I. lookup.raku
3.14
```

## Commenti

1. `Circle::` è lo stash del modulo, e usare un nome come chiave — `Circle::{'$pi'}` — recupera il valore memorizzato sotto di esso. La chiave deve includere il sigillo, esattamente come i nomi elencati.

1. Questo raggiunge lo stesso valore del qualificato `$Circle::pi`, ma poiché il nome è una stringa ordinaria può essere calcolato a tempo di esecuzione anziché essere scritto nel codice sorgente.

{% include nav.html %}
