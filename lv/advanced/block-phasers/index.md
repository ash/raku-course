---
title: Bloku fāzeri
translations_gpt:
---

{% include menu.html %}

Bez visai programmai piesaistītajiem fāzeriem Raku ir arī fāzeri, kas piesaistīti viena bloka vai cikla dzīvei.

## Ieiešana blokā un iziešana no tā

Fāzeris `ENTER` izpildās katru reizi, kad izpilde ieiet blokā, un fāzeris `LEAVE` — katru reizi, kad tā to atstāj, neatkarīgi no tā, kurā rindā tie uzrakstīti:

```raku
say 'before block';
{
    LEAVE say 'leaving';
    ENTER say 'entering';
    say 'inside';
}
say 'after block';
```

Izvade rāda, ka `ENTER` izpildās pirmais un `LEAVE` — pēdējais, apņemot bloka ķermeni:

```
before block
entering
inside
leaving
after block
```

`LEAVE` ir īpaši noderīgs tāpēc, ka izpildās pat tad, ja bloks tiek atstāts priekšlaikus, un tas padara to par uzticamu vietu, kur atbrīvot resursu.

Fāzeris viena teikuma vietā var ņemt pilnu `{ }` bloku, un tādus var iestatīt vairākus. Kad blokam ir vairāk nekā viens `LEAVE`, tie nostrādā apgrieztā secībā — pēdējais reģistrētais izpildās pirmais, tāpēc bloks attinas kā steks:

```raku
say 'open A';
{
    LEAVE {
        say 'close A';
    }
    say 'open B';
    LEAVE {
        say 'close B';
    }
    say 'work';
}
say 'done';
```

Resurss `A` tiek atvērts pirmais un aizvērts pēdējais:

```
open A
open B
work
close B
close A
done
```

Šī «pēdējais iekšā, pirmais ārā» kārtība ir tieši tas, ko vēlaties sakopšanai: tas, kas iestatīts pēdējais, tiek nojaukts pirmais. Visai programmai piesaistītais fāzeris `END` uzvedas tāpat — arī vairāki `END` bloki izpildās apgrieztā secībā salīdzinājumā ar to, kādā tie uzrakstīti.

## Cikla fāzeri

Ciklu iekšienē vēl trīs fāzeri iezīmē iterācijas posmus: `FIRST` izpildās vienreiz pirms pirmās iterācijas, `LAST` — vienreiz pēc pēdējās, un `NEXT` — katras iterācijas beigās:

```raku
for 1..3 {
    FIRST say '-- first';
    LAST  say '-- last';
    NEXT  say "-- next (was $_)";
    say "body $_";
}
```

Cikls dod:

```
-- first
body 1
-- next (was 1)
body 2
-- next (was 2)
body 3
-- next (was 3)
-- last
```

Tāpat kā pārējiem fāzeriem, `FIRST`, `NEXT` un `LAST` novietojumam pirmkodā nav nozīmes — katrs izpildās savā brīdī.

{% include nav.html %}
