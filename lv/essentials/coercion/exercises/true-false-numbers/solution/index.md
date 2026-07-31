---
title: 'Risinājums: True un False skaitļi'
---

{% include menu.html %}

Lai pārvērstu skaitli par Būla vērtību, jūs varat izmantot vai nu `?` prefiksa operatoru vai konstruktora formu, vai izsaukt `Bool` metodi, vai `so` rutīnu kā prefiksa operatoru vai metodi:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

Ir diezgan acīmredzami, ka nenulles vērtības tiek pārvērstas par `True`. Tāpēc mēs esam visvairāk ieinteresēti apskatīt tās opcijas, kas kļūst par `False`.

Visi nulles, veseli skaitļi, peldošā punkta skaitļi vai racionālie skaitļi, tiek pārvērsti par `False`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Protams, nekas nemainās, ja jūs mēģināt vispirms noliegt skaitli:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Jūs varat atrast pilnu programmu ar iepriekš minēto piemēru failā [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-numbers.raku).

{% include nav.html %}