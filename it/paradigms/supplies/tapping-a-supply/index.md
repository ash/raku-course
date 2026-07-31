---
title: Collegarsi a un supply
translations_gpt:
---

{% include menu.html %}

Per abbonarti a un supply vi _attingi_: dai a `.tap` un blocco, e quel blocco gira per ogni valore che il supply emette. Il supply più semplice con cui sperimentare è `Supply.from-list`, che emette i valori di un elenco:

```raku
my $s = Supply.from-list(1, 2, 3);
$s.tap(-> $v { say $v });
```

Questo stampa:

```
1
2
3
```

Il blocco `-> $v { say $v }` è la _presa_. Il supply vi spinge dentro ogni valore a turno, quindi il blocco gira tre volte, una per valore.

La presa può fare qualunque cosa con il valore, compreso accumulare un risultato:

```raku
my $total = 0;
Supply.from-list(1, 2, 3).tap(-> $v { $total += $v });
say $total; # 6
```

Qui ogni valore emesso viene aggiunto a `$total`, che finisce a `6`. Attingere è l'atto di base della programmazione reattiva: collegare un pezzo di comportamento a un flusso e lasciare che sia il flusso a pilotarlo.

{% include nav.html %}
