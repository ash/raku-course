---
title: 'Risinājums: Pāra, nepāra vai nulle'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
my $n = 12;

given $n {
    when 0      { say 'zero' }
    when $_ %% 2 { say 'even' }
    default     { say 'odd' }
}
```

🦋 Jūs varat atrast pirmkodu failā [sign-of-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/sign-of-a-number.raku).

## Izvade

```
even
```

## Komentāri

1. `when 0` atbilst vienīgajai vērtībai — nullei. Tas ir pirmais, jo nulle ir arī pāra skaitlis, un mēs vēlamies par to ziņot atsevišķi.

1. `when $_ %% 2` ir nosacījums, kur `$_` ir tēma, ko nosaka `given`: operators `%%` pārbauda, vai skaitlis dalās ar divi bez atlikuma. Vērtība `12` nav nulle, bet dalās ar divi, tāpēc programma izdrukā `even`.

1. `default` aptver visu pārējo — skaitļus, kas nav ne nulle, ne pāra, tas ir, nepāra skaitļus.

{% include nav.html %}
