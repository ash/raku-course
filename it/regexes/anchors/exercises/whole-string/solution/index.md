---
title: "Soluzione: L'intera stringa"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 Trova il programma nel file [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Output

```
True
```

## Commenti

1. Le ancore `^` e `$` fissano lo schema all'inizio e alla fine della stringa.

1. Fra di esse, `<[a..z]>+` deve rendere conto di ogni carattere, quindi una stringa con una maiuscola o uno spazio, come `Hello there`, fallirebbe.

{% include nav.html %}
