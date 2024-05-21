---
title: Using eslif
---

{% include menu.html %}

Līdz šim mēs esam apguvuši `if` un `else`. Ko darīt, ja vēlaties organizēt testu ķēdi? Raku valodā ir vismaz divi veidi, kā to izdarīt (patiesībā ir vēl vairāk).

Viena no iespējām ir izmantot `if`, `elsif` un `else` bloku ķēdi. Ņemiet vērā `elsif` pareizrakstību. Tas nav ne `elseif`, ne `else if`.

```raku
my $x = prompt 'Enter the number: ';
if $x > 100 {
    say "$x is bigger than 100.";
}
elsif $x > 50 {
    say "$x is bigger than 50.";
}
elsif $x > 25 {
    say "$x is bigger than 25.";
}
else {
    say "$x is 25 or smaller.";
}
```

Šajā programmā ir trīs zari un trīs testi viens pēc otra. Tiklīdz kāds no nosacījumiem izrādās `True`, tiek izpildīts atbilstošais koda bloks. Ja neviens pārbaudījums nav `True`, tiek izpildīts `else` bloks.

Šeit ir daži programmas testa izpildes piemēri, kas aktivizē visus blokus:

```console
$ raku t.raku
Enter the number: 120
120 is bigger than 100.

$ raku t.raku
Enter the number: 75      
75 is bigger than 50.

$ raku t.raku
Enter the number: 30
30 is bigger than 25.

$ raku t.raku
Enter the number: 10
10 is 25 or smaller.
```

Alternatīvs veids ir izmantot `given` un `when` pāri, ko mēs apgūsim nākotnē.

{% include nav.html %}