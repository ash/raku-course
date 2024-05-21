---
title: Soluzione a ‘Il valore di π’
---

{% include menu.html %}

Il programma per stampare il valore di π è abbastanza semplice.

## Codice

```raku
say π;
```

🦋 Puoi trovare il codice completo nel file [pi.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/pi.raku).

## Output

Esegui il programma e vedi cosa stampa:

```console
$ raku exercises/numbers/pi.raku
3.141592653589793
```

## Commenti

Raku ci offre una costante integrata chiamata `π`, che rende il programma banale. Tuttavia, considera altre opzioni per fare lo stesso:

```raku
    π.say;
```

Oppure:

```raku
    pi.say;
```

Oppure:

```raku
    say pi;
```

{% include nav.html %}