---
title: 'Risinājums: Zīme un paritāte'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Atrodiet programmu failā [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Izvade

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Komentāri

1. Zīmi izvēlas *saķēdēts* trīsvērtīgais operators: `negative`, kad zem nulles,
citādi `zero`, kad vienāds, citādi `positive`.

1. `$n %% 2` pārbauda dalāmību ar divi, tāpēc tas ir patiess pāra skaitļiem un
aplams nepāra skaitļiem. (`0` skaitās par pāra.)

{% include nav.html %}
