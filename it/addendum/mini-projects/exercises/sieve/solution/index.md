---
title: 'Soluzione: Crivello di Eratostene'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $limit = 30;
my %composite;

for 2 .. $limit -> $i {
    next if %composite{$i};
    for ($i², $i² + $i ... $limit) -> $multiple {
        %composite{$multiple} = True;
    }
}

say (2..$limit).grep({ !%composite{$_} });
```

🦋 Trova il programma nel file [sieve.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/sieve.raku).

## Output

```
(2 3 5 7 11 13 17 19 23 29)
```

## Commenti

1. Invece di una lista di flag, `%composite` ricorda quali numeri sono stati cancellati. Un
numero che quando arriva il suo turno non vi compare ancora è primo.

1. Per ogni primo `$i`, i suoi multipli vengono generati come sequenza
`$i², $i² + $i ... $limit` e segnati come composti. Cominciare da `$i²` salta i multipli
già trattati dai primi più piccoli.

1. Questa è un'unica [sequenza](/it/paradigms/lazy/sequence-operator), non un'intestazione
`for` in stile C. L'operatore `...` prende i primi due valori, ricava il passo fra di essi e
prosegue fino al limite. Per `$i` = `3` questo significa cominciare da `9`, poi `12`, quindi
il passo è `3`, e il ciclo percorre l'intera lista:

    ```raku
    my $i = 3;
    say ($i², $i² + $i ... 30); # (9 12 15 18 21 24 27 30)
    ```

    Quindi `for` riceve un'unica lista da percorrere — `9, 12, 15, …` — invece di tre
clausole separate.

1. `$i²` eleva il numero al quadrato usando un apice Unicode. Raku accetta tutte e tre le
forme `$i * $i`, `$i ** 2` e `$i²` — calcolano esattamente lo stesso valore, quindi scegli
quella che si legge meglio per te. Le cifre in apice (`²`, `³`, …) sono caratteri ordinari
che puoi digitare o incollare direttamente nel sorgente.

{% include nav.html %}
