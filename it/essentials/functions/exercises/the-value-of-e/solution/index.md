---
title: 'Soluzione: Il valore di e'
---

{% include menu.html %}

## Disclaimer

In Raku, c'è una costante predefinita `e` che fornisce la risposta immediata al compito. La soluzione mostrata di seguito è progettata per scopi educativi.

## Codice

La formula in questo compito contiene un fattoriale, e abbiamo già almeno due soluzioni per calcolarlo (altre seguiranno). Il programma seguente definisce due funzioni: una per calcolare il fattoriale, un'altra per la somma parziale secondo la formula.

Poiché è richiesto che la funzione possa essere chiamata senza argomenti, nel qual caso esegue un numero predefinito di iterazioni, possiamo aggiungere un [valore predefinito](/it/essentials/functions/default-values) al parametro: `sub e-approx($max = 100)`.

Nel codice, nota le somiglianze nel modo in cui i valori dei risultati sono accumulati in un [ciclo `for` postfisso](/it/essentials/loops/postfix-for) su un [intervallo](/it/essentials/ranges).

Ecco la soluzione:

```raku
sub factorial($n) {
    my $f = 1;
    $f *= $_ for 1..$n;

    return $f;
}

sub e-approx($max = 100) {
    my $e = 1;
    $e += 1 / factorial($_) for 1..$max;

    return $e;
}

say e-approx(10);
say e-approx();
```

🦋 Trova il programma nel file [the-value-of-e.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/the-value-of-e.raku).

## Output

Con 10 e 100 iterazioni, otteniamo i seguenti risultati. Inoltre, prova altri valori di `$max`.

```console
$ raku exercises/functions/the-value-of-e.raku
2.7182818
2.718281828459045
```

{% include nav.html %}