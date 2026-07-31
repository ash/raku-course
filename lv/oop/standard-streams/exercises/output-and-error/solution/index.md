---
title: 'Risinājums: Izvade un kļūdas'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @data = 3, 5, 7;

my $sum = 0;
for @data -> $n {
    $sum += $n;
    $*ERR.say("running total: $sum");
}

$*OUT.say($sum);
```

🦋 Atrodiet programmu failā [output-and-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/output-and-error.raku).

## Izvade

Ekrānā parādās abas plūsmas — vispirms uzkrātās summas, tad galīgais rezultāts:

```
running total: 3
running total: 8
running total: 15
15
```

Ja standarta kļūdu plūsma tiek izmesta, paliek tikai īstā izvade:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Komentāri

1. `$*OUT` un `$*ERR` ir standarta izvades un standarta kļūdu plūsmas turi. Katram ir sava metode `say`.

1. Katrā cikla piegājienā tiek pieskaitīts nākamais skaitlis un uzkrātā summa ierakstīta `$*ERR`; uz `$*OUT` aiziet tikai galīgā summa. Ekrānā progress un rezultāts izskatās vienādi, taču tie ceļo pa dažādām plūsmām — un tieši tāpēc, novirzot standarta kļūdas prom ar `2>/dev/null`, paliek tikai galīgais `15`.

{% include nav.html %}
