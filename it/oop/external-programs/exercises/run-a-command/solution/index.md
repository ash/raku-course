---
title: 'Soluzione: Eseguite un comando'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
run 'echo', 'home:', '$HOME';
```

🦋 Trova il programma nel file [run-a-command.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/run-a-command.raku).

## Output

```
home: $HOME
```

## Commenti

1. `run` lancia `echo` direttamente, passando ogni stringa come argomento separato. Senza `:out`, l'output del programma va dritto sullo schermo.

1. L'argomento raggiunge `echo` esattamente com'è scritto: `$HOME` viene stampato alla lettera, non sostituito con la tua directory home, perché non c'è alcuna shell a espanderlo. È per questo che `run` è la scelta predefinita sicura: lo stesso comando dato a `shell` potrebbe comportarsi in modo molto diverso.

1. Per stampare davvero la directory home, lascia che sia una shell a fare l'espansione: `shell 'echo home: $HOME'` stampa qualcosa come `home: /home/anna`. (Tieni le virgolette singole anche dal lato Raku: un `"$HOME"` fra virgolette doppie farebbe tentare a Raku stesso di interpolare una variabile di nome `$HOME` prima ancora che `echo` giri.)

{% include nav.html %}
