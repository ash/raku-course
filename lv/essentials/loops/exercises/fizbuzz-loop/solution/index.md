---
title: 'Risinājums: FizzBuzz ciklā'
---

{% include menu.html %}

Šoreiz dalāmības pārbaude notiek ciklā. Tā vietā, lai tieši izdrukātu, frāze vispirms tiek uzkrāta atsevišķā mainīgajā un vēlāk interpolēta virknē.

## Kods

Šeit ir jaunais risinājums:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Atrodiet programmu failā [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fizbuzz-loop.raku).

## Izvade

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Komentārs

Pedantisks problēmu risinātājs varētu uzskatīt, ka risinājums nav ideāls, jo tas izdrukā atstarpi pēc kolas pat tiem skaitļiem, kuriem nav piešķirts neviens Fizz vai Buzz. Modificējiet programmu, lai izvairītos no šīs problēmas.

{% include nav.html %}