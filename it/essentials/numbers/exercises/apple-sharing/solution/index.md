---
title: Soluzione a ‘Condivisione di mele’
---

{% include menu.html %}

Ecco la soluzione al problema.

## Codice

```raku
my $N = 3;
my $K = 11;

my $gets = $K div $N;
my $remains = $K % $N;

say "Ogni persona riceve $gets mela(e).";
say "Rimangono $remains mela(e).";
```

🦋 Puoi trovare il codice completo nel file [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/apple-sharing.raku).

## Output

Con i numeri di input 3 e 11, il programma stampa il seguente output:

```console
$ raku exercises/numbers/apple-sharing.raku
Ogni persona riceve 3 mela(e).
Rimangono 2 mela(e).
```

Modifica il valore iniziale di `$N` e `$K` per modellare altre situazioni:

* `$K` è multiplo di `$N`, per esempio, `12` e `3`;
* `$K` è uguale a `$N`;
* `$K` è minore di `$N`.

## Commenti

Nel programma, stiamo usando i due operatori: `div` per eseguire la divisione intera e `%` per ottenere il resto della divisione. In alternativa, puoi fare i calcoli nel seguente modo:

```raku
my $gets = $K div $N;
my $remains = $K - $N * $gets;
```

Nota anche come le variabili sono interpolate nella stringa.

{% include nav.html %}