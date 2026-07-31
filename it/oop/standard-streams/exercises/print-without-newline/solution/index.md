---
title: 'Soluzione: Stampare senza andare a capo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
$*OUT.print('a');
$*OUT.print('b');
$*OUT.say('c');
```

🦋 Trova il programma nel file [print-without-newline.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/print-without-newline.raku).

## Output

```
abc
```

## Commenti

1. `$*OUT.print` scrive il suo testo senza aggiungere un ritorno a capo, quindi `a` e `b` restano sulla stessa riga.

1. `$*OUT.say` scrive `c` e poi un ritorno a capo, chiudendo la riga `abc`.

{% include nav.html %}
