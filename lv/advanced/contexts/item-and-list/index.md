---
title: Vienuma un saraksta konteksts
---

{% include menu.html %}

Vēl divi konteksti nosaka, vai kaut kas tiek uzskatīts par **sarakstu** ar vairākām vērtībām vai par vienu **elementu**. Tā ir atšķirība, kas slēpjas aiz `@` un `$` sigiliem.

_Saraksta kontekstā_ masīvs izklājas savos elementos. `for` cikls ievieto savu argumentu saraksta kontekstā, tāpēc tas iterē cauri katram elementam:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for @a;
say $count; # 3
```

_Elementa kontekstā_ tas pats masīvs tiek uzskatīts par vienu vērtību. `$( … )` kontekstualizators piespiedu kārtā uzliek elementa kontekstu, tāpēc tagad cikls redz tikai vienu lietu un izpildās vienu reizi:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for $(@a);
say $count; # 1
```

Tāpēc, piešķirot masīvu skalāram, tas tiek iesaiņots kā viens elements, nevis kopēti tā elementi: `my $x = @a` ievieto `@a` elementa kontekstā. Ņemiet vērā, ka šis vienīgais elements var būt cits konteiners ar daudziem elementiem:

```raku
my @a = 1, 2, 3;

my $var = @a;
say $var;      # [1 2 3]
say $var.WHAT; # (Array)
```

Mainīgais `$var` tagad satur vienu (jo tas ir skalārs konteiners) objektu, kas ir `Array`. To var viegli pierādīt, apstrādājot `$x` kā masīva atsauci (kā to sauktu citās valodās):

```raku
say $var[1]; # 2
```

Atbilstošais `@( … )` kontekstualizators dara pretējo — piespiedu kārtā uzliek saraksta kontekstu.

Pastāv arī _izlietnes konteksts_ (sink context) — izteikuma konteksts, kura vērtība tiek izmesta, piemēram, rinda, kas pastāv tikai sava blakusefekta dēļ. Kad vērtība nonāk izlietnes kontekstā bez noderīga pielietojuma, Raku var brīdināt par "bezjēdzīgu lietojumu" (useless use), kas ir noderīgs padoms, ka esat aizmirsis izmantot rezultātu.

Izvēlētais sigils (`$` vai `@`) faktiski ir konteksta izvēle, un kontekstualizatori `$( )` un `@( )` ļauj to vajadzības gadījumā mainīt.

{% include nav.html %}
