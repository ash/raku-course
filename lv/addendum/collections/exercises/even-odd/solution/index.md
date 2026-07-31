---
title: 'Risinājums: Sadaliet pāra un nepāra'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Atrodiet programmu failā [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Izvade

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Komentāri

1. `* %% 2` ir patiess skaitļiem, kas dalās ar divi; `* % 2` ir patiess, kad
atlikums nav nulle, tas ir, skaitlis ir nepāra. Katrs `grep` patur vienu grupu.

1. Interpolējot `@even[]` ar tukšo iekavu šķēli, elementi dubultpēdiņās
liktās virknes iekšienē tiek izdrukāti, atdalīti ar atstarpēm.

{% include nav.html %}
