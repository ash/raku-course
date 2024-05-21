---
title: Soluzione a ‘Triple negation’
---

{% include menu.html %}

Il programma mostrato nel compito non si compila e richiede una piccola correzione. Ecco la variante corretta e funzionante (spazio aggiunto per separare `!` e `!!`):

## Codice

```raku
my $value = False;
say ! !!$value;
```

🦋 Puoi trovare il codice completo nel file [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/triple-negation.raku).

## Output

Il programma stampa un valore Booleano invertito come probabilmente ti aspettavi:

```console
$ raku triple-negation.raku
True
```

## Commenti

Era un po' inaspettato che il programma con tre punti esclamativi non si compilasse:

```console
$ raku triple-negation.raku
===SORRY!=== Error while compiling /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Two terms in a row
at /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    expecting any of:
        infix
        infix stopper
        postfix
        statement end
        statement modifier
        statement modifier loop
```

Uno spazio aggiuntivo risolve questo problema. Ma non cadere in un'altra trappola. Considera il seguente programma:

```raku
my $value = False;
say !!! $value;
```

Questo programma si compila ma termina con il seguente messaggio:

```console
$ raku triple-negation.raku
False
    in block <unit> at exercises/booleans/triple-negation.raku line 2
```

Questo accade perché `!!!` è un operatore speciale per marcare una parte del codice come codice stub. Se il programma raggiunge questo punto, termina e stampa il messaggio, che nel nostro caso era il valore corrente della variabile `$value`. Consulta 📖 [la documentazione](https://docs.raku.org/routine/!!!) per maggiori dettagli.

{% include nav.html %}