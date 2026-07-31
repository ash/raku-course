---
title: "Soluzione: Catturate l'output"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Trova il programma nel file [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Output

```
3
```

## Commenti

1. `:out` redirige l'output del programma dentro il `Proc` invece che sullo schermo, e `.out.slurp(:close)` lo rilegge tutto; `.trim` toglie il ritorno a capo finale che `echo` aggiunge.

1. Una volta che l'output è una stringa ordinaria nel nostro programma, lo trattiamo come qualunque altro dato: `.words.elems` lo divide sugli spazi e conta i pezzi, dando `3`. È questo il senso della cattura: il programma esterno diventa un mattoncino il cui risultato elaboriamo ulteriormente.

{% include nav.html %}
