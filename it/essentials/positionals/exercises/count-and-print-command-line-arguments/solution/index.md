---
title: Soluzione di ‘Count and print command-line arguments’
---

{% include menu.html %}

In questo programma, un ciclo `for` è una buona scelta.

## Codice

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Trova il programma nel file [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/count-and-print-arguments.raku).

## Output

Esegui il programma e conferma che stampa gli argomenti e i numeri di riga:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Discussione

Questo programma utilizza alcuni trucchi utili. Innanzitutto, il ciclo `for` percorre l'[intervallo costruito con `^`](/it/essentials/ranges/excluding-endpoints). Quindi, l'intervallo inizia da 0 e arriva fino a (ma non incluso) il valore di `@*ARGS`. In questo contesto, [restituisce](/it/essentials/positionals/arrays#size) la lunghezza dell'array.

Poiché il primo elemento di un array ha indice `0`, e il compito richiede di contare le righe da `1`, questo semplice spostamento viene calcolato [all'interno di un blocco di codice](/it/essentials/strings/code-interpolation) in una stringa: `"{$n + 1} ..."`.

{% include nav.html %}