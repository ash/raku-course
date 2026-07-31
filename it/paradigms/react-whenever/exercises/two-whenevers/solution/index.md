---
title: 'Soluzione: Due whenever'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $deposits    = Supply.from-list(100, 50, 200);
my $withdrawals = Supply.from-list(30, 120);

my $balance = 0;

react {
    whenever $deposits    { $balance += $_ }
    whenever $withdrawals { $balance -= $_ }
}

say $balance;
```

🦋 Trova il programma nel file [two-whenevers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/two-whenevers.raku).

## Output

```
200
```

## Commenti

1. I due blocchi `whenever` osservano i due supply con un nome e reagiscono in modo **diverso**: i depositi vengono aggiunti, i prelievi sottratti. Un blocco react, due flussi, due reazioni distinte — è questo il senso di avere un `whenever` per sorgente.

1. Il blocco react finisce solo quando entrambi i supply sono conclusi, quindi il saldo è definitivo prima di essere stampato: `100 + 50 + 200 - 30 - 120` dà `200`. Poiché addizione e sottrazione commutano, l'intreccio dei due flussi non influenza il risultato.

1. Qui entrambi i supply consegnano i propri valori all'istante, un flusso dopo l'altro. Nella vita vera gli eventi di un conto bancario arrivano distribuiti nel tempo — un deposito ora, un prelievo un'ora dopo — e i due flussi si intrecciano, come nella dimostrazione [Due timer](/it/paradigms/react-whenever/two-timers). Il codice resta esattamente lo stesso: il blocco react esegue il `whenever` che corrisponde a ogni evento man mano che entra.

{% include nav.html %}
