---
title: 'Soluzione: Passate una variabile a un processo figlio'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 Trova il programma nel file [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Output

```
3
```

## Commenti

1. `spurt` crea `notes.txt` con tre righe. Impostare `%*ENV<NOTES>` al suo nome mette il nome del file nell'ambiente che qualunque programma figlio erediterà.

1. Il comando `shell` eredita quell'ambiente, espande `$NOTES` in `notes.txt` e dà in pasto il file a `wc -l`, che ne conta le righe. La redirezione `< "$NOTES"` riduce l'output al solo numero `3`, che catturiamo con `:out` e ripuliamo con trim.

1. Infine la pulizia avviene di nuovo in Raku con `unlink` — nessuna shell necessaria. Cancellare il file è una semplice operazione sul file system, quindi non c'è motivo di lanciare un altro processo per farlo.

{% include nav.html %}
