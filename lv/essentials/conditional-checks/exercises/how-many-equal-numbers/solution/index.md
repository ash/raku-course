---
title: 'Risinājums: Cik daudz skaitļi ir vienādi?'
---

{% include menu.html %}

Programmā vajadzētu veikt dažas salīdzināšanas. Trīs ievades skaitļiem ir divi iespējamie gadījumi:

1. Visi trīs skaitļi ir vienādi,
1. Tikai divi skaitļi ir vienādi, un
1. Visi skaitļi ir atšķirīgi.

## Kods

Šeit ir risinājums ar skaidrām salīdzināšanām.

```raku
my $n1 = prompt 'Ievadiet skaitli 1: ';
my $n2 = prompt 'Ievadiet skaitli 2: ';
my $n3 = prompt 'Ievadiet skaitli 3: ';

if $n1 == $n2 == $n3 {
    say 3;
}
elsif $n1 == $n2 || $n2 == $n3 || $n1 == $n3 {
    say 2;
}
else {
    say 0;
}
```

🦋 Atrodiet programmu failā [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/how-many-equal-numbers.raku).

## Izvade

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Ievadiet skaitli 1: 14
Ievadiet skaitli 2: 8
Ievadiet skaitli 3: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Ievadiet skaitli 1: 15
Ievadiet skaitli 2: 15
Ievadiet skaitli 3: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Ievadiet skaitli 1: 4
Ievadiet skaitli 2: 6
Ievadiet skaitli 3: 8
0
```

## Komentāri

1. Ņemiet vērā, ka jūs varat salīdzināt trīs skaitļus vienā izteiksmē: `$n1 == $n2 == $n3`.
1. Atgriezieties pie šī uzdevuma un atrisiniet to vēlreiz pēc tam, kad būsiet apguvis reducēšanas operatoru.

{% include nav.html %}