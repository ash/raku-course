---
title: 'Soluzione: Perimetro di un rettangolo'
---

{% include menu.html %}

Questo programma deve essere in grado di accettare uno o due argomenti da riga di comando. Un nuovo trucco è mostrato nella soluzione qui. Il valore predefinito del secondo variabile è impostato al valore del primo variabile: `sub MAIN($a, $b = $a)`. Quindi, invece di creare le due multi-funzioni, abbiamo una funzione generale che imposta la dimensione del secondo lato se la figura è un quadrato.

## Codice

Ecco la soluzione:

```raku
sub MAIN($a, $b = $a) {
    my $perimetro = 2 * ($a + $b);

    my $forma = $a == $b ?? 'quadrato' !! 'rettangolo';
    say "Il perimetro di un $forma è $perimetro.";
}
```

🦋 Trova il programma nel file [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/perimeter.raku).

## Output

Prova diversi valori di input per testare sia i quadrati che i rettangoli.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
Il perimetro di un quadrato è 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
Il perimetro di un rettangolo è 6.
```

Nota che c'è il terzo caso che dovrebbe essere testato. Se vengono passati due numeri uguali, il programma dovrebbe comunque capire che si tratta di un quadrato:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
Il perimetro di un quadrato è 8.
```

{% include nav.html %}