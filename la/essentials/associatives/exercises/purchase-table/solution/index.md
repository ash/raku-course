---
title: 'Solutio: Tabula emptionis'
---

{% include menu.html %}

Tabula continet caput (quod simpliciter imprimes cum uno `say`) et numerum ordinum cum structura simili: nomen item, pretium item, quantitas et summa costarum horum item.

Cum vis ordinem ordinum servare, array est bona electio ad servanda item. Ita, unaquaeque linea tabulae correspondet unico elemento array.

In secundo gradu, recordum servari potest in structura hash cum paucis campis nominatis: `name`, `price`, et `quantity`.

Reliquum programmatis est iterare per item, calculare summas et imprimere ordines tabulae.

## Codex

Hic est una ex solutionibus possibilibus huic muneri:

```raku
my @items = [
    {
        name => 'Sellae',
        price => 20.57,
        quantity => 4,
    },
    {
        name => 'Tabulae',
        price => 50.18,
        quantity => 1,
    }
];

say "Item\tPretium\tN\tSumma";
for @items -> $item {
    my $total = $item<price> * $item<quantity>;
    say "$item<name>\t\$$item<price>\t$item<quantity>\t\$$total";
}
```

🦋 Invenies programma in archivo [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/purchase-table.raku).

## Output

```console
$ raku exercises/associatives/purchase-table.raku
Item	Pretium	N	Summa
Sellae	$20.57	4	$82.28
Tabulae	$50.18	1	$50.18
```

{% include nav.html %}