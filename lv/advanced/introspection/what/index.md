---
title: '`WHAT` izmantošana'
translations_gpt:
---

{% include menu.html %}

`WHAT` ir pseidometode, kas nodrošina piekļuvi vērtības tipam. To var izmantot līdzīgi kā `.^name`:

```raku
my $var = 42;

say $var.^name;
say $var.WHAT;
```

Abi izdrukā tipu ar nelielu atšķirību noformējumā: `.^name` dod tīru nosaukumu, savukārt `WHAT` parāda tipa objektu, ierakstītu iekavās:

```
Int
(Int)
```

Mainīgajam bez tipa ierobežojuma tips sākas kā `Any`. Tiklīdz piešķirat vērtību, gan `^name`, gan `WHAT` seko saglabātās vērtības tipam:

```raku
my $var;
say $var.^name; # Any
say $var.WHAT;  # (Any)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

Ar tipa ierobežojumu tips ir zināms uzreiz, pat pirms kaut kas ir piešķirts:

```raku
my Str $var;
say $var.^name; # Str
say $var.WHAT;  # (Str)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

## Tipa objektu salīdzināšana

Tā kā `WHAT` atgriež pašu tipa objektu, divus no tiem var salīdzināt ar _vērtības identitātes_ operatoru `===`, kas pārbauda, vai abas puses ir viena un tā pati vērtība. Katram tipam pastāv tikai viens tipa objekts, tāpēc šis ir tīrs veids, kā pārbaudīt, vai divām vērtībām ir vienāds tips:

```raku
my $a = 42;
my $b = 100;

say $a.WHAT === $b.WHAT; # True  — abi ir Int
say $a.WHAT === Int;     # True
say $a.WHAT === Str;     # False
```

Atšķirībā no `==`, kas salīdzina skaitļus, `===` salīdzina identitāti, tāpēc tas darbojas tieši ar tipa objektiem (un citām vērtībām).

{% include nav.html %}
