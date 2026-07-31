---
title: Matching di intervalli, tipi e condizioni
translations_gpt:
---

{% include menu.html %}

Un blocco `when` non confronta solo per uguaglianza. Esegue uno _smart match_ tra il topic e il valore fornito, quindi è possibile confrontare intervalli, tipi e condizioni, non solo singoli valori.

## Intervalli

Un intervallo corrisponde quando il topic rientra al suo interno. Questo rende `given`/`when` una scelta naturale per raggruppare numeri in fasce:

```raku
my $score = 75;

given $score {
    when 90..100 { say 'A' }
    when 80..89  { say 'B' }
    when 70..79  { say 'C' }
    default      { say 'F' }
}
```

Il valore `75` rientra nell'intervallo `70..79`, quindi il programma stampa:

```
C
```

## Tipi

Un tipo corrisponde quando il topic è di quel tipo. Questo permette di ramificare in base al tipo di valore che si ha:

```raku
my $value = 'Raku';

given $value {
    when Int { say 'an integer' }
    when Str { say 'a string' }
}
```

Poiché `$value` contiene una stringa, il programma stampa:

```
a string
```

## Condizioni

È possibile anche usare un confronto direttamente. All'interno del `when`, il topic è disponibile come `$_`, quindi una condizione come `$_ < 0` corrisponde quando è vera:

```raku
my $n = -7;

given $n {
    when $_ < 0 { say 'negative' }
    when 0      { say 'zero' }
    default     { say 'positive' }
}
```

Qui il primo `when` corrisponde, e il programma stampa:

```
negative
```

{% include nav.html %}
