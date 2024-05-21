---
title: 'Soluzione: Tabella degli acquisti'
---

{% include menu.html %}

La tabella contiene un'intestazione (che si stampa semplicemente con un singolo `say`) e un numero di righe con una struttura simile: nome dell'articolo, prezzo dell'articolo, quantità e il costo totale di questi articoli.

Poiché vuoi preservare l'ordine delle righe, un array è una buona scelta per mantenere gli articoli. Quindi, ogni riga della tabella corrisponde a un singolo elemento di un array.

Al secondo livello, un record può essere salvato in una struttura hash con alcuni campi denominati: `name`, `price` e `quantity`.

Il resto del programma consiste nel ciclarci sopra, calcolare i totali e stampare le righe della tabella.

## Codice

Ecco una delle possibili soluzioni a questo compito:

```raku
my @items = [
    {
        name => 'Sedie',
        price => 20.57,
        quantity => 4,
    },
    {
        name => 'Tavoli',
        price => 50.18,
        quantity => 1,
    }
];

say "Articolo\tPrezzo\tN\tTotale";
for @items -> $item {
    my $total = $item<price> * $item<quantity>;
    say "$item<name>\t\$$item<price>\t$item<quantity>\t\$$total";
}
```

🦋 Trova il programma nel file [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/purchase-table.raku).

## Output

```console
$ raku exercises/associatives/purchase-table.raku
Articolo	Prezzo	N	Totale
Sedie	$20.57	4	$82.28
Tavoli	$50.18	1	$50.18
```

{% include nav.html %}