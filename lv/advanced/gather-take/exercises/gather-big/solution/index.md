---
title: 'Risinājums: Vākt līdz pilnam'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $sum = 0;
my @result = gather for 1..100 {
    $sum += $_;
    last if $sum > 10;
    take $_;
}

say @result;
```

🦋 Atrodiet programmu failā [gather-big.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/gather-big.raku).

## Izvade

```
[1 2 3 4]
```

## Komentāri

1. Ciklam dots simts skaitļu diapazons — daudz vairāk, nekā tas izmantos. Tas ir labi, jo cikls sevi aptur pats: tiklīdz `$sum` pārsniedz `10`, `last` izrauj ārā, un atlikušie skaitļi netiek pat apmeklēti.

1. Bloka iekšienē secībai ir nozīme. Vispirms pieskaitām `$sum` un pārbaudām robežu pirms ņemšanas, tāpēc skaitlis, kas summu pārsviež pāri `10` (šeit `5`), netiek savākts. Uzkrātā summa sasniedz tieši `10` pēc `4`, tāpēc savāktais saraksts ir `1, 2, 3, 4`.

1. Šī priekšlaicīgā iziešana ar `for` ir tas, ko `gather`/`take` var un `grep` nevar: `grep` vienmēr pārskata visu sarakstu, bet šeit mēs izvēlamies, kad apstāties.

{% include nav.html %}
