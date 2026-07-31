---
title: Lambdas
translations_gpt:
---

{% include menu.html %}

_Lambda_ ir funkcija bez nosaukuma. Ar diviem veidiem, kā tādu uzrakstīt, jau esat sastapušies. Pirmais ir **[bultiņas bloks](/lv/advanced/anonymous-subroutines)**, kas savus parametrus uzskaita aiz bultiņas `->`:

```raku
my &square = -> $x { $x * $x };
say square(7); # 49
```

Otrais ir **[Whatever](/lv/advanced/whatever)** forma, kur `*` ieņem argumenta vietu un izteiksme ap to kļūst par viena argumenta funkciju:

```raku
my &square = * ** 2;
say square(7); # 49
```

Abas rada vienu un to pašu lietu: koda gabalu, ko var saglabāt, padot un izsaukt. Lambdas spīd kā argumenti augstākas kārtas funkcijām, kur nosaukuma došana tikai traucētu:

```raku
say (1..5).map(-> $n { $n * $n }); # (1 4 9 16 25)
say (1..5).map(* ** 2);            # (1 4 9 16 25)
```

Bultiņas forma ir skaidrāka, kad ķermenis ir garāks vai ņem vairākus parametrus; Whatever forma ir brīnišķīgi īsa vienkāršām izteiksmēm. Tās ir divi pieraksti vienai un tai pašai idejai: funkcija bez nosaukuma.

{% include nav.html %}
