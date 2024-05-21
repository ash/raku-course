---
title: loop
---

{% include menu.html %}

`loop` paziņojums ir konstrukcija Raku valodā, kas ir ļoti līdzīga tradicionālajiem cikliem C programmēšanas valodā un tās radiniekos. Tā pieņem trīs paziņojumus: inicializētāju, pārbaudi un paziņojumu, kas modificē cikla mainīgo. Cikla ķermenis tiek atkārtoti izpildīts, kamēr pārbaude paliek `True`.

```raku
loop (my $c = 0; $c < 5; $c++) {
    say "The current value of the counter is $c.";
}
```

Šeit `++` ir postfix operators, kas palielina tā argumentu par 1. Mēs apskatīsim vairāk operatoru kursa otrajā daļā.

Programma izpilda cikla ķermeni piecas reizes.

```console
$ raku t.raku
The current value of the counter is 0.
The current value of the counter is 1.
The current value of the counter is 2.
The current value of the counter is 3.
The current value of the counter is 4.
```

Daži vai pat visi paziņojumi `loop` galvenē var tikt izlaisti. Piemēram, šeit ir tā pati programma:

```raku
my $c = 0;
loop (; $c < 5;) {
    say "The current value of the counter is $c.";
    $c++;
}
```

## * * *

`loop` cikli, iespējams, ir vismazāk izmantotie cikli Raku valodā. Tos var atrast, piemēram, automatizētā tulkotājā no C uz Raku. Tomēr Raku valodā ir ērtāki cikli, piemēram, `for`, kurus mēs drīzumā apskatīsim.

{% include nav.html %}