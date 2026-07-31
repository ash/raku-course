---
title: 'Soluzione: Comincia con'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 Trova il programma nel file [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Output

```
True
```

## Commenti

1. L'ancora `^` costringe la corrispondenza a cominciare dall'inizio della stringa, e `\d` richiede poi che quel primo carattere sia una cifra.

1. Senza il `^`, lo schema riuscirebbe anche per una cifra che comparisse più avanti nella stringa, come in `'apples 3'`.

{% include nav.html %}
