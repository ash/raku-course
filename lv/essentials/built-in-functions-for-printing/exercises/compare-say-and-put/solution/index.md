---
title: 'Risinājums: Salīdziniet `say` un `put`'
---

{% include menu.html %}

## Kods

Šeit ir viens no iespējamiem risinājumiem:

```raku
my Int $i = 42;
say $i;
put $i;

my Rat $r = 3/4;
say $r;
put $r;

my Num $n = 3e4;
say $n;
put $n;

my Str $s = 'Raku';
say $s;
put $s;

my @a = <this is an array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <this is a list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

Lai iegūtu lielāku pārliecību, varat arī izdrukāt mainīgā tipu, piemēram, kā parādīts masīviem un sarakstiem, lai pārliecinātos, ka esat izveidojis mainīgo vēlamajā tipā.

🦋 Atrodiet programmu failā [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/built-in-functions-for-printing/compare-say-and-put.raku).

## Izvade

Programmas izvade, kas parādīta iepriekš, ir parādīta zemāk.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
42
42
0.75
0.75
30000
30000
Raku
Raku
[this is an array]
this is an array
(this is a list)
this is a list
{A => alpha, B => beta}
A	alpha
B	beta
```

## Komentāri

Izpētot programmas izvadi, jūs skaidri redzat, ka nav atšķirības, drukājot vienkāršus datu tipus, piemēram, skaitļus un virknes. Attiecībā uz agregātu datu tipiem `say` rada nedaudz "trokšņaināku" izvadi salīdzinājumā ar `put`. No otras puses, attiecībā uz hešiem `put` to izdrukā kā tabulu, salīdzinot ar vienu `say` rindu.

Atšķirība starp izvades formātu ir noteikta pēc tā, kā `Str` un `gist` metodes ir ieviestas attiecīgajam tipam. Par to mēs runāsim vairāk vēlāk kursā.

{% include nav.html %}