---
title: 'Soluzione: Confronta `say` e `put`'
---

{% include menu.html %}

## Codice

Ecco una delle possibili soluzioni:

```raku
my Int $i = 42;
say $i;
put $i;

my Rat $r = 3/4;
say $r;
put $r;

my Num $n = 3e4;
say $n;
put $n;

my Str $s = 'Raku';
say $s;
put $s;

my @a = <this is an array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <this is a list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

Per maggiore sicurezza, puoi anche stampare il tipo della variabile, ad esempio, come mostrato per array e liste, per assicurarti di aver creato una variabile del tipo desiderato.

🦋 Trova il programma nel file [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/compare-say-and-put.raku).

## Output

L'output del programma mostrato sopra è riportato di seguito.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
42
42
0.75
0.75
30000
30000
Raku
Raku
[this is an array]
this is an array
(this is a list)
this is a list
{A => alpha, B => beta}
A	alpha
B	beta
```

## Commenti

Esaminando l'output del programma, puoi chiaramente vedere che non c'è differenza quando si stampano tipi di dati semplici come numeri e stringhe. Per i tipi di dati aggregati, `say` produce un output un po' più 'rumoroso' rispetto a `put`. D'altra parte, per gli hash, `put` li stampa come una tabella rispetto a una singola linea di `say`.

La differenza tra i formati di output è determinata da come i metodi `Str` e `gist` sono implementati per il tipo in questione. Ne parleremo più dettagliatamente più avanti nel corso.

{% include nav.html %}