---
title: Interpolazione delle variabili nelle stringhe Raku
---

{% include menu.html %}

Hai già notato nelle sezioni precedenti che a volte le stringhe erano racchiuse tra virgolette singole, ma a volte tra virgolette doppie? La differenza è cruciale.

Ovviamente, puoi usare le virgolette doppie se vuoi inserire una singola virgoletta all'interno della stringa con il minimo sforzo:

```raku
say "O'Henry";
```

A proposito, è comunque meglio usare un apostrofo corretto invece di una singola virgoletta poiché [Raku è bravo con Unicode](../../on-unicode).

```raku
say 'O’Henry';
```

Ma il vero potere delle virgolette doppie è la loro capacità di _interpolare_ variabili e—come vedremo presto—di eseguire codice! Esamina il seguente programma:

```raku
my $name = 'Karl';
say "Hello, $name!";
```

Come ci si potrebbe aspettare, il programma stampa `Hello, Karl!`. Il nome della variabile `$name` (insieme al suo sigillo `$`) è stato sostituito dal valore della variabile.

La variabile è stata interpolata con il valore che la variabile aveva al momento dell'interpolazione, quindi se cambi il contenuto di `$name` e lo interpoli di nuovo, il nuovo valore verrà sostituito. Facciamo una prova:

```raku
my $name = 'Karl';
say "Hello, $name!";

$name = 'Anna';
say "Hello, $name!";
```

La stessa stringa genera messaggi diversi questa volta:

    Hello, Karl!
    Hello, Anna!

{% include nav.html %}