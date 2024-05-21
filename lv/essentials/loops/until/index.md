---
title: līdz
---

{% include menu.html %}

`līdz` konstruktam ir pretējs `kamēr`. Tas izpilda koda bloku, līdz nosacījums kļūst `True` (vai, citiem vārdiem sakot, kamēr tas ir `False`).

Šeit ir modificēta [programma no iepriekšējās lapas](../while), kas izmanto `līdz` un jaunu nosacījumu:

```raku
my $x = 0;
until $x > 10 {
    $x = prompt 'Ievadiet skaitli, kas nav lielāks par 10: ';
    say "Jūs ievadījāt $x.";
}
say "$x ir lielāks par 10.";
```

Palaidiet programmu un pārbaudiet rezultātu:

```console
$ raku t.raku 
Ievadiet skaitli, kas nav lielāks par 10: 10
Jūs ievadījāt 10.
Ievadiet skaitli, kas nav lielāks par 10: 4
Jūs ievadījāt 4.
Ievadiet skaitli, kas nav lielāks par 10: 1
Jūs ievadījāt 1.
Ievadiet skaitli, kas nav lielāks par 10: 20
Jūs ievadījāt 20.
20 ir lielāks par 10.
```

## `līdz` vs. `kamēr`

Salīdziniet līdzvērtīgas programmas ar `kamēr` un `līdz`:

```raku
while $x <= 10 { . . . }

until $x > 10 { . . . }
```

Kā redzat, nosacījumi ir viens otra noliegumi. Šajā ziņā `kamēr` un `līdz` ir tādās pašās attiecībās kā `ja` un `ja ne`.

{% include nav.html %}