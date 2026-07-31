---
title: 'Solvo: Kolekti ĝis plena'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $sum = 0;
my @result = gather for 1..100 {
    $sum += $_;
    last if $sum > 10;
    take $_;
}

say @result;
```

🦋 Vi povas trovi la fontkodon en la dosiero [gather-big.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/gather-big.raku).

## Eligo

```
[1 2 3 4]
```

## Komentoj

1. Al la buklo estas donita intervalo de cent nombroj, multe pli ol ĝi uzos. Tio estas en ordo, ĉar la buklo haltigas sin mem: tuj kiam `$sum` superas `10`, `last` elsaltas kaj la restantaj nombroj neniam estas vizitataj.

1. La ordo ene de la bloko gravas. Ni unue aldonas al `$sum` kaj kontrolas la limon antaŭ ol preni, do la nombro, kiu puŝas la sumon super `10` (ĉi tie, `5`), ne estas kolektata. La kuranta sumo atingas ĝuste `10` post `4`, do la kolektita listo estas `1, 2, 3, 4`.

1. Ĉi tiu frua eliro per `for` estas tio, kion `gather`/`take` povas fari kaj `grep` ne povas: `grep` ĉiam trairas la tutan liston, dum ĉi tie ni elektas, kiam halti.

{% include nav.html %}
