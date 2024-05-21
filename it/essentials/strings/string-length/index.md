---
title: Lunghezza delle stringhe in Raku
---

{% include menu.html %}

La natura Unicode delle stringhe rende alcune cose banali un po' più difficili. O, almeno, devi considerarle come un argomento meno diretto. Prendi, per esempio, la lunghezza di una stringa. È il numero di caratteri, o è il numero di byte? Oppure, cosa succede se lo stesso carattere è scomposto diversamente in stringhe diverse, è ancora un solo carattere?

## Lunghezza in caratteri

Per ottenere la lunghezza della stringa in caratteri, usa il _metodo_ `chars`:

```raku
my $str = '你好世界';
say $str.chars;
```

Anche se parleremo dei metodi più avanti, dovremmo già essere in grado di usarli. In Raku, puoi chiamare metodi su quasi ogni oggetto, comprese le stringhe e le variabili scalari. Per chiamare un metodo, usa un punto. Quindi, qui vediamo il metodo chiamato su una variabile che contiene una stringa: `$str.chars`.

Ci sono quattro caratteri in questo saluto cinese 你好世界. E `$str.chars` restituisce esattamente `4`.

## Lunghezza in byte

Solo per riferimento, ecco come ottenere la lunghezza della stringa in byte. In questo caso, è importante sapere quale codifica viene utilizzata per mantenere la stringa:

```raku
my $str = '你好世界';
say $str.encode('UTF-8').bytes;
```

Questa volta, il programma stampa `12`. Nota che abbiamo due chiamate di metodo concatenate nella seconda riga qui.

## Lunghezza in punti di codice

Solo per completezza, ecco un altro metodo utile che si riferisce anche alla lunghezza delle stringhe: `codes`. Restituisce il numero di punti di codice nella stringa dopo che è stata normalizzata. In molti casi, `codes` e `chars` restituiscono lo stesso valore. Tuttavia, in alcuni casi rari, quando, per esempio, hai costruito 'un carattere impossibile', per il quale non esiste un singolo punto di codice in tutto lo spazio Unicode, i metodi danno risultati diversi.

```raku
say 'x̨'.chars;
say 'x̨'.codes;
```

Questo carattere, `x̨`, non ha un punto di codice dedicato e può essere costruito solo dalle due parti: la lettera minuscola `x` e il carattere combinante `0x0328`. Quindi, c'è ancora un carattere ma due punti di codice. Quindi, il programma stampa:

    1
    2

{% include nav.html %}