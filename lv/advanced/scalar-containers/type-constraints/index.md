---
title: Tipu ierobežojumi
---

{% include menu.html %}

[Pamatu daļā](/lv/essentials/typed-variables/type-constraints/) jūs redzējāt, kā iestatīt mainīgā tipu, izmantojot tipa ierobežojumu. Ir vērts uzsvērt, ka tieši _konteineris_ uzliek šo ierobežojumu vērtībām, ko tas drīkst pieņemt.

Šī deklarācija izveido skalāru konteineru, kas var glabāt tikai veselus skaitļus:

```raku
my Int $int;
```

Tipizēts konteineris pieņem tikai tādas vērtības, kas atbilst tā tipam, tāpēc visas šīs piešķiršanas ir derīgas:

```raku
my Int $int;

$int = 123;       # directly an integer
say $int;

$int = 100 + 23;  # the result is an integer
say $int;

$int = '123'.Int; # a string converted to an integer
say $int;
```

Raku šajā gadījumā neveic automātisku tipu pārveidošanu. Tāpēc piešķirt peldošā komata skaitli (kas Raku ir `Rat` vērtība) nav atļauts:

```raku
my Int $int;
$int = 123.45;
```

Kļūda tiek konstatēta jau kompilācijas laikā:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

Lai izvairītos no kļūdas, pārveidojiet vērtību tieši:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Neļaujiet sevi mulsināt diviem punktiem virknē `123.45.Int`. Pirmais ir decimālais atdalītājs; otrais izsauc `Int` metodi uz racionālās (`Rat`) vērtības.

{% include nav.html %}
