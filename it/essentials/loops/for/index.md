---
title: '"for" loop'
---

{% include menu.html %}

Il ciclo `for` è uno strumento potente per iterare su più elementi. Ad esempio, prendiamo un intervallo:

```raku
for 1..5 -> $n {
    say $n;
}
```

In questo programma, la variabile `$n` assume il valore successivo dell'intervallo ad ogni iterazione. Nota che non è necessario dichiarare esplicitamente la variabile con `my`. Il blocco di codice viene ripetuto tante volte quanti sono gli elementi nella fonte di dati. Quindi, il programma stampa i numeri riga per riga:

```console
$ raku t.raku 
1
2
3
4
5
```

Il programma itera su tutti i valori che l'[intervallo](/it/essentials/ranges) `1..5` genera. Questi sono `1`, `2`, `3`, `4` e `5`.

## Prendere più di un valore

Una caratteristica interessante di Raku è che puoi prendere più di un elemento in una singola iterazione. Il seguente programma stampa due numeri in un ciclo:

```raku
for 1..6 -> $n, $m {
    say "$n and $m";
}
```

L'output di questo programma è il seguente:

```console
$ raku t.raku
1 and 2
3 and 4
5 and 6
```

{% include nav.html %}