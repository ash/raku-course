---
title: 'Risinājums: Pirkumu tabula'
---

{% include menu.html %}

Tabulā ir galvene (kuru jūs vienkārši izdrukājat ar vienu `say`) un vairākas rindas ar līdzīgu struktūru: preces nosaukums, preces cena, daudzums un šo preču kopējās izmaksas.

Tā kā vēlaties saglabāt rindu secību, masīvs ir laba izvēle, lai saglabātu preces. Tātad, katra tabulas rinda atbilst vienam masīva elementam.

Otrajā līmenī ierakstu var saglabāt heša struktūrā ar dažiem nosauktiem laukiem: `name`, `price` un `quantity`.

Pārējā programma ir, lai pārstaigātu preces, aprēķinātu kopsummas un izdrukātu tabulas rindas.

## Kods

Šeit ir viens no iespējamiem risinājumiem šim uzdevumam:

```raku
my @items = [
    {
        name => 'Krēsli',
        price => 20.57,
        quantity => 4,
    },
    {
        name => 'Galdi',
        price => 50.18,
        quantity => 1,
    }
];

say "Prece\tCena\tN\tKopā";
for @items -> $item {
    my $total = $item<price> * $item<quantity>;
    say "$item<name>\t\$$item<price>\t$item<quantity>\t\$$total";
}
```

🦋 Atrodiet programmu failā [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/purchase-table.raku).

## Izvade

```console
$ raku exercises/associatives/purchase-table.raku
Prece	Cena	N	Kopā
Krēsli	$20.57	4	$82.28
Galdi	$50.18	1	$50.18
```

{% include nav.html %}