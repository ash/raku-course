---
title: Soluzione a 'Tabelle Booleane'
---

{% include menu.html %}

Ecco un possibile programma che stampa tutti i risultati delle operazioni booleane.

## Codice

```raku
say 'True && True is ', True && True; 
say 'True && False is ', True && False;
say 'False && True is ', False && True;
say 'False && False is ', False && False;

say 'True || True is ', True || True; 
say 'True || False is ', True || False;
say 'False || True is ', False || True;
say 'False || False is ', False || False;

say 'True ^^ True is ', True ^^ True; 
say 'True ^^ False is ', True ^^ False;
say 'False ^^ True is ', False ^^ True;
say 'False ^^ False is ', False ^^ False;
```

🦋 Puoi trovare il codice completo nel file [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/tables.raku).

## Output

Esegui il programma, e stamperà la seguente tabella.

```console
$ raku tables.raku
True && True is True
True && False is False
False && True is False
False && False is False
True || True is True
True || False is True
False || True is True
False || False is False
True ^^ True is Nil
True ^^ False is True
False ^^ True is True
False ^^ False is False
```

## Commenti

Nota che, a causa della maggiore precedenza delle operazioni booleane, non è necessario metterle tra parentesi. Questo, però, non è il caso se stai usando la concatenazione di stringhe:

```raku
say 'True && True is ' ~ (True && True);
```

In alternativa, puoi usare [l'interpolazione del codice](/it/essentials/strings/code-interpolation).

{% include nav.html %}