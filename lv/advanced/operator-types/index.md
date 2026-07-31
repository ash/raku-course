---
title: Raku operatoru tipi
translations_gpt:
---

{% include menu.html %}

Jūs jau esat lietojuši daudzus operatorus — `+`, `~`, `++` un citus. Raku valodā operatorus klasificē pēc tā, _kur_ tie atrodas attiecībā pret saviem operandiem. Kategoriju pārzināšana noderēs vēlāk, kad jūs definēsiet savus operatorus.

## `prefix`

Prefiksa operators atrodas _pirms_ viena operanda:

```raku
my $x = 5;
say -$x; # -5
say ?$x; # True
```

Šeit `-` apgriež skaitļa zīmi, bet `?` pārvērš vērtību tās Būla izteiksmē.

## `infix`

Infiksa operators atrodas _starp_ diviem operandiem. Lielākā daļa pazīstamo aritmētisko un virkņu operatoru ir infiksa operatori:

```raku
say 3 + 4;       # 7
say 'a' ~ 'b';   # ab
```

Infiksa operators ne vienmēr ir pieturzīme — tas var būt vārds. Piemēram, operators `gcd`, ar kuru jūs iepazināties, apskatot [veselus skaitļus](/lv/advanced/integers), ir infiksa operators, kas rakstīts kā nosaukums starp diviem operandiem:

```raku
say 12 gcd 18;   # 6
```

## `postfix`

Postfiksa operators atrodas _aiz_ viena operanda:

```raku
my $x = 5;
$x++;
say $x; # 6
```

## `circumfix` un `postcircumfix`

Cirkumfiksa operators _aptver_ savu operandu. Kvadrātiekavas, kas veido masīvu, ir cirkumfiksa operators:

```raku
my @a = [1, 2, 3];
```

Postcirkumfiksa operators aptver kaut ko, bet seko aiz terma. Indeksēšana ir postcirkumfiksa operators — `[1]` aiz `@a`:

```raku
my @a = 10, 20, 30;
say @a[1]; # 20
```

Šie nosaukumi — `prefix`, `infix`, `postfix`, `circumfix` un `postcircumfix` — ir tie paši vārdi, ko Raku lieto, kad jūs [deklarējat jaunu operatoru](/lv/advanced/user-defined-operators), kā jūs redzēsiet vēlāk.

{% include nav.html %}
