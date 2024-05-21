---
title: Soluzione a 'Tabella degli acquisti'
---

{% include menu.html %}

## Codice

Ecco una possibile soluzione:

```raku
my $chair-price = 20.57;
my $chairs = 4;
my $chairs-total = $chair-price * $chairs;

my $table-price = 50.18;
my $tables = 1;
my $tables-total = $table-price * $tables;

say "Item\tPrice\tN\tTotal";
say "Chairs\t\$$chair-price\t$chairs\t\$$chairs-total";
say "Tables\t\$$table-price\t$tables\t\$$tables-total";
```

Tutti i numeri sono hardcoded e salvati in un numero di variabili. Usiamo anche l'operatore di moltiplicazione `*` per calcolare il risultato. Impareremo di più sugli operatori nelle prossime sezioni di questo corso, ma a questo punto, la costruzione come `$chair-price * $chairs` non dovrebbe essere qualcosa che causa domande.

Le tre righe che generano l'output stampano le tre righe della tabella, incluso il suo header. Nota come le colonne sono separate dai caratteri di tabulazione `\t`. Nelle righe dei dati, vediamo anche un carattere dollaro escapato: `\$` così come diverse variabili che vogliamo interpolare.

🦋 Puoi trovare il codice sorgente nel file [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/purchase-table.raku).

## Output

Esegui il programma e vedi come stampa la tabella:

```
$ raku exercises/strings/purchase-table.raku
Item    Price   N      Total
Chairs  $20.57  4      $82.28
Tables  $50.18  1      $50.18
```

## Commenti

Hai notato i trattini nei nomi delle variabili come `$chair-price` o `$tables-total`? Questo è un modo perfettamente accettabile di nominare variabili in Raku.

Non essere confuso dai due simboli del dollaro adiacenti. Raku li legge separatamente. Ad esempio, nella sottostringa `\$$price`, il primo simbolo del dollaro è escapato e quindi rappresenta se stesso, mentre il secondo fa parte del nome della variabile `$price`.

Tutte le stringhe sono quotate tra doppi apici per permettere l'interpolazione delle variabili e dei caratteri speciali.

Torniamo a questo compito di nuovo dopo che ci siamo familiarizzati con array e hash.

{% include nav.html %}