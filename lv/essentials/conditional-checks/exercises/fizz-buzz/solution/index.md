---
title: 'Risinājums: FizzBuzz'
---

{% include menu.html %}

Šis uzdevums ir klasisks intervijas uzdevums, kas palīdz pārbaudīt, vai domājat par gadījumiem, kad abi nosacījumi ir `True`. Ja skaitlis dalās gan ar 3, gan 5, programmai jāizdrukā `FizzBuzz`.

## Kods

Šeit ir risinājums:

```raku
my $n = prompt 'Ievadiet skaitli: ';

print 'Fizz' ja $n %% 3;
print 'Buzz' ja $n %% 5;
print "\n";
```

🦋 Atrodiet programmu failā [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/exercises/conditional-checks/fizz-buzz.raku).

## Piemērs

Jums jātestē dažas ievaddatu klases:

* Skaitļi, kas dalās ar 3, piem.: 3, 6, 9, 12.
* Skaitļi, kas dalās ar 5, piem.: 5, 10, 15, 20.
* Skaitļi, kas dalās gan ar 3, gan ar 5, piem.: 15, 30, 45.
* Citi skaitļi, kas nedalās ne ar 3, ne ar 5, piem.: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Ievadiet skaitli: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Ievadiet skaitli: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Ievadiet skaitli: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Ievadiet skaitli: 30
FizzBuzz
```

{% include nav.html %}