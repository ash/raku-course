---
title: 'Risinājums: Digitālās kāpnes'
---

{% include menu.html %}

Programma izmanto divus ciklus un divus diapazonus.

## Kods

Šeit ir viens no iespējamiem risinājumiem:

```raku
my $size = prompt 'Ievadiet izmēru: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Atrodiet programmu failā [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/digital-stairs.raku).

## Izvade

Palaidiet programmu un ievadiet struktūras izmēru:

```console
$ raku exercises/loops/digital-stairs.raku
Ievadiet izmēru: 7
1
12
123
1234
12345
123456
1234567
```

## Komentārs

Pievērsiet uzmanību tam, kā tiek izdrukāts pašreizējais cipars:

```raku
.print for 1..$n;
```

Tāpat kā ar `say`, `print` rutīnu var izsaukt kā metodi. Šajā gadījumā tā tiek izsaukta uz [tēmas mainīgā](/lv/essentials/loops/topic) `$_`.

{% include nav.html %}