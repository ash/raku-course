---
title: do e il valore di un blocco
translations_gpt:
---

{% include menu.html %}

Un blocco da solo è un'istruzione, non un'espressione, quindi normalmente non è possibile assegnarlo a una variabile. Il prefisso `do` trasforma un blocco in un'espressione il cui valore è il valore della sua **ultima** istruzione:

```raku
my $x = do {
    my $a = 3;
    $a + 4;
};

say $x; # 7
```

All'interno del blocco potete dichiarare variabili, eseguire diverse istruzioni e calcolare un risultato; `do` restituisce qualunque cosa il blocco produca. Questo è utile quando per produrre un valore servono più espressioni.

`do` funziona anche davanti alle istruzioni di controllo del flusso, permettendo anche a queste di restituire un valore:

```raku
my $sign = do given 5 {
    when * > 0 { 'positive' }
    when * < 0 { 'negative' }
    default    { 'zero' }
};

say $sign; # positive
```

Qui `do given` trasforma l'intero `given`/`when` in un'espressione che produce `positive`. Lo stesso funziona con `do if` e `do for`. In breve, `do` è il modo per usare un blocco, o una struttura di controllo, in un punto dove è richiesto un valore.

{% include nav.html %}
