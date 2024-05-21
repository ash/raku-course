---
title: Soluzione a 'Doppia negazione’
---

{% include menu.html %}

Estendiamo il programma per risolvere la seconda parte dell'esercizio e riutilizziamo la stessa variabile:

## Codice

```raku
my $value = False;
say !!$value;

$value = True;
say !!$value;
```

🦋 Puoi trovare il codice completo nel file [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/double-negation.raku).

## Commenti

Prima di eseguire il programma, pensiamo a cosa stamperà. Ci sono due operatori di negazione prima della variabile. Essi agiscono come due operatori di negazione. Nel primo caso, il valore viene invertito da `False` a `True`, e poi immediatamente invertito di nuovo da `True` a `False`. Nel secondo caso, l'algoritmo è lo stesso: dopo due negazioni, otteniamo il valore booleano iniziale.

## Output

Il programma stampa il seguente output, che conferma le considerazioni sopra:

```console
$ raku exercises/booleans/double-negation.raku
False
True
```

{% include nav.html %}