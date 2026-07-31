---
title: 'Soluzione: Gestite e proseguite'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
for <ok bad ok> -> $item {
    {
        die 'boom' if $item eq 'bad';
        say "processed $item";

        CATCH {
            default {
                say "skipped ($item): {.message}";
            }
        }
    }
}
```

🦋 Trova il programma nel file [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Output

```
processed ok
skipped (bad): boom
processed ok
```

## Commenti

1. Il phaser `CATCH` è dentro il blocco che tratta il singolo elemento, quindi gestisce un `die` per quel solo elemento. Poiché l'eccezione viene gestita lì, non sfugge mai fino a fermare l'intero ciclo.

1. Questo è l'uso tipico di `CATCH` rispetto a `try`: un fallimento in un'iterazione viene affrontato localmente, e il ciclo passa all'elemento successivo. L'elemento centrale fallisce, ma i due elementi `ok` vengono comunque elaborati.

{% include nav.html %}
