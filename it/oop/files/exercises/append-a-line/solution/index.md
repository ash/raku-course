---
title: 'Soluzione: Costruite un registro'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Trova il programma nel file [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Output

```
start
entry 1
entry 2
entry 3
```

## Commenti

1. Il primo `spurt` crea il file da zero con la riga `start`.

1. Ogni `spurt` dentro il ciclo usa `:append`, quindi aggiunge la sua riga dopo il contenuto esistente invece di sostituire il file. È esattamente così che cresce un file di log: ogni iterazione (o ogni esecuzione di un programma) attacca in fondo un'altra riga.

1. Senza `:append` ogni passaggio sovrascriverebbe il file, e sopravviverebbe solo l'ultima riga.

{% include nav.html %}
