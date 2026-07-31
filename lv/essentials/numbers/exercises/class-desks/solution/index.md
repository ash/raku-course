---
title: 'Risinājums: Klases galdi'
---

{% include menu.html %}

Risinājums uzdevumam ir parādīts zemāk.

## Kods

```raku
my $students = 23;

my $desks = $students div 2 + $students % 2;

say "$desks desks must be bought.";
```

🦋 Pilnu kodu var atrast failā [class-desks.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/class-desks.raku).

## Izvade

Palaidiet programmu vismaz divas reizes, izmēģinot gan nepāra, gan pāra skaitu skolēnu. Piemēram, ievades skaitļiem `23` un `24`, programma izdrukā vienādu rezultātu:

```console
$ raku exercises/numbers/class-desks.raku
12 desks must be bought.
```

## Komentāri

Nav pietiekami vienkārši sadalīt skolēnu skaitu uz divi. Ir svarīgi apstrādāt gan nepāra, gan pāra skaitļus. Viens no iespējamiem risinājumiem, lai noapaļotu skaitli uz augšu: `$students div 2 + $students % 2`. Kad skolēnu skaits ir pāra, otrais komponents ir nulle, un rezultāts ir vienāds ar pusi no skolēnu skaita. Bet, kad skolēnu skaits ir nepāra, pirmais komponents joprojām ir vesels skaitlis, pateicoties `div` vietā `/`, un otrais izteiksmes loceklis pievieno vienu papildus soli.

{% include nav.html %}