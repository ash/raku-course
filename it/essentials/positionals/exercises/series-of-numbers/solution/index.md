---
title: Soluzione di ‘Stampare una serie di numeri’
---

{% include menu.html %}

Ci sono più modi per risolvere il problema dato.

## Codice 1

La prima soluzione è più in stile Raku e compatta.

```raku
my $begin = prompt 'Inizio: ';
my $end = prompt 'Fine: ';

.say for $begin .. $end;
```

🦋 Trova il programma nel file [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers.raku).

## Codice 2

La seconda soluzione possibile può utilizzare l'istruzione `loop`.

```raku
my $begin = prompt 'Inizio: ';
my $end = prompt 'Fine: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Trova il programma nel file [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers-loop.raku).

Come puoi vedere, la prima variante è significativamente più corta e più espressiva.

## Discussione

Nella prima variante del programma, viene utilizzata la [forma postfissa del ciclo `for`](/it/essentials/loops/postfix-for). Nel secondo programma, viene scelto un `loop`.

## Output

Inserisci i due numeri nella console ed esegui il programma. Entrambe le varianti producono lo stesso output.

```console
$ raku exercises/positionals/series-of-numbers.raku
Inizio: 15
Fine: 19
15
16
17
18
19
```

{% include nav.html %}