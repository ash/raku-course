---
title: Intervalli
---

{% include menu.html %}

Gli intervalli in Raku generano elenchi di elementi sequenziali.

Nel caso più semplice, un intervallo è un elenco di numeri interi incrementali. Per creare un intervallo, usa l'operatore `..` e i due valori che definiscono i valori minimo e massimo dell'intervallo:

```raku
1 .. 5
```

Gli spazi intorno all'operatore sono opzionali. La seguente costruzione può essere scritta come:

```raku
1..5
```

Sebbene un intervallo sia un mezzo per generare elenchi, è comunque un singolo oggetto, quindi può essere salvato in una variabile scalare:

```raku
my $r = 1 .. 5;
```

## Non solo numeri

È possibile costruire un intervallo da altri tipi di dati, per i quali Raku sa come incrementarli. Ad esempio:

```raku
my $letters = 'a' .. 'z';
```

Gli intervalli sono oggetti del loro proprio tipo di dati in Raku. Il tipo della variabile `$r` è `Range`.

{% include nav.html %}