---
title: Izmantojot repeat
---

{% include menu.html %}

`while` un `until` bloki var nekad netikt izpildīti, ja nosacījums sākotnēji ir `False`. Pretstatā, `repeat` bloks vienmēr tiek izpildīts vismaz vienu reizi. Apstāšanās nosacījums tiek pārbaudīts pēc koda bloka. Jūs izmantojat tos pašus vārdus `while` vai `until` testam.

Apsveriet šo programmu.

```raku
my $x = 100;
repeat {
    $x = prompt 'Ievadiet skaitli: ';
    say "Jūs ievadījāt $x.";
} while $x <= 10;
say "$x ir lielāks par 10.";
```

Mainīgais `$x` sākotnēji tiek iestatīts uz `100`, un `while` nosacījums pārbauda, vai `$x` ir mazāks vai vienāds ar `10`. Ar mainīgā doto vērtību nosacījums jau ir `False`, bet koda bloks joprojām tiek izpildīts vispirms.

```console
$ raku t.raku
Ievadiet skaitli: 10
Jūs ievadījāt 10.
Ievadiet skaitli: 20
Jūs ievadījāt 20.
20 ir lielāks par 10.
```

Modificēsim programmu, lai izmantotu `until`.

```raku
my $x = 0;
repeat {
    $x = prompt 'Ievadiet skaitli: ';
    say "Jūs ievadījāt $x.";
} until $x > 10;
say "$x ir lielāks par 10.";
```

Palaidiet to, lai pārliecinātos, ka tā darbojas, kā paredzēts:

```console
$ raku t.raku
Ievadiet skaitli: 5
Jūs ievadījāt 5.
Ievadiet skaitli: 15
Jūs ievadījāt 15.
15 ir lielāks par 10.
```

{% include nav.html %}