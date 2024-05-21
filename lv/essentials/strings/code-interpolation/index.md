---
title: Koda interpolācija Raku virknēs
---

{% include menu.html %}

Nākamais interpolācijas līmenis ir koda interpolācija. Tā ļauj ievietot vienkāršu (un arī sarežģītu!) kodu tieši dubultpēdiņu virknes iekšpusē.

Interpolētais kods tiek ievietots starp cirtainajām iekavām:

```raku
my $a = 10;
my $b = 20;
say "Summa no $a un $b ir {$a + $b}.";
```

Programma izdrukā:

```console
$ raku t.raku 
Summa no 10 un 20 ir 30.
```

## Vēlreiz par mainīgajiem

Viena no šīs metodes pielietojumiem ir palīdzēt novērst neskaidrības situācijās, kad mainīgajam jāseko tekstam, kuru var kļūdaini saprast kā mainīgā nosaukuma turpinājumu. Lai to novērstu, izmantojiet cirtainās iekavas, lai iekļautu mainīgo:

```raku
my $how-many = 5;
my $what = 'suit';
say "Tur ir $how-many {$what}s."; # Tur ir 5 uzvalki.
```

Bez cirtainajām iekavām Raku mēģinātu interpolēt neeksistējošu mainīgo `$whats`.

{% include nav.html %}