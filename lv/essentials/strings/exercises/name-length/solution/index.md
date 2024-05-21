---
title: Risinājums uzdevumam 'Vārda garums'
---

{% include menu.html %}

## Kods

Šeit ir uzdevuma risinājums:

```raku
my $name = prompt 'What is your name? ';
say $name.chars;
```

🦋 Jūs varat atrast pirmkodu failā [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/name-length.raku).

## Izvade

Palaidiet programmu un ievadiet vārdu.

```console
$ raku exercises/strings/name-length.raku 
What is your name? Alexandra
9
```

## Komentāri

Šajā programmā mēs iegūstam virknes garumu, izsaucot `chars` metodi uz `$name` mainīgā. Tā kā mainīgais satur virkni, metode atgriež tās garumu.

{% include nav.html %}