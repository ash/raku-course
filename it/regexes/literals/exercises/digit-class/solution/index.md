---
title: 'Soluzione: Una lettera o una cifra'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say '  @x7' ~~ / <[a..z 0..9]> /;
```

🦋 Trova il programma nel file [digit-class.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/digit-class.raku).

## Output

```
｢x｣
```

## Commenti

1. Una classe può contenere più intervalli, uno dopo l'altro. `<[a..z 0..9]>` riconosce un carattere che sia una lettera minuscola **oppure** una cifra. Lo spazio fra i due intervalli è lì solo per leggibilità — `<[a..z0..9]>` significa esattamente lo stesso, perché gli spazi dentro `<[…]>` vengono ignorati, come altrove in un regex.

1. Percorrendo da sinistra, i due spazi e la `@` non sono nella classe e vengono saltati; il primo carattere corrispondente è `x`. (Questa classe combinata è vicina a ciò che rappresenta la scorciatoia `\w`.)

{% include nav.html %}
