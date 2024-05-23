---
title: 'Solvo: Aĉetotabelo'
---

{% include menu.html %}

La tabelo enhavas kaplinion (kiun vi simple presas per unuopa `say`) kaj kelkajn vicojn kun simila strukturo: nomo de objekto, prezo de objekto, kvanto kaj la totala kosto de tiuj objektoj.

Ĉar vi volas konservi la ordon de vicoj, tabelo estas bona elekto por konservi la objektojn. Do, ĉiu linio de la tabelo respondas al unuopa elemento de tabelo.

Je la dua nivelo, rekordo povas esti konservita en hakstrukturo kun kelkaj nomitaj kampoj: `name`, `price`, kaj `quantity`.

La resto de la programo estas ripeti super la objektoj, kalkuli la totalojn kaj presi la tabelvicojn.

## Kodo

Jen unu el la eblaj solvoj por ĉi tiu tasko:

```raku
my @items = [
    {
        name => 'Chairs',
        price => 20.57,
        quantity => 4,
    },
    {
        name => 'Tables',
        price => 50.18,
        quantity => 1,
    }
];

say "Item\tPrice\tN\tTotal";
for @items -> $item {
    my $total = $item<price> * $item<quantity>;
    say "$item<name>\t\$$item<price>\t$item<quantity>\t\$$total";
}
```

🦋 Trovu la programon en la dosiero [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/purchase-table.raku).

## Eligo

```console
$ raku exercises/associatives/purchase-table.raku
Item	Price	N	Total
Chairs	$20.57	4	$82.28
Tables	$50.18	1	$50.18
```

{% include nav.html %}