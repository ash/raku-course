---
title: Salīdzinājumi un plāni
translations_gpt:
---

{% include menu.html %}

Bez `ok` un `is` modulim `Test` ir salīdzinājumi dažādiem vērtību veidiem. Noderīgākie ir:

* `is` — salīdzina divas vērtības uz vienlīdzību (kā virknes/skaitļus)
* `is-deeply` — salīdzina divas datu struktūras uz precīzu, tipu ievērojošu vienlīdzību
* `like` — pārbauda, vai virkne atbilst regulārajai izteiksmei
* `isnt` — izdodas, kad divas vērtības **nav** vienādas

`is-deeply` ir pareizā izvēle masīviem, jaukteņiem un ligzdotiem datiem, jo tas precīzi salīdzina struktūru un tipu:

```raku
use Test;

my @reversed = (1, 2, 3).reverse;
is-deeply @reversed, [3, 2, 1], 'reversed';

done-testing;
```

Tas izdrukā:

```
ok 1 - reversed
1..1
```

Kamēr `is` pārvērstu virknēs un salīdzinātu brīvi, `is-deeply` prasa, lai struktūras patiešām sakristu. Ievērojiet, ka `done-testing` plānu `1..1` liek beigās, pēc pārbaudes.

Tā vietā, lai ļautu `done-testing` testus saskaitīt jūsu vietā, skaitu var pateikt jau iepriekš ar `plan`. Tas pasargā no testu faila, kas beidzas priekšlaikus un klusi izlaiž pārbaudes:

```raku
use Test;

plan 2;
ok True,  'first';
ok 1 < 2, 'second';
```

Šoreiz plāns nāk **pirmais**, pirms rezultātiem:

```
1..2
ok 1 - first
ok 2 - second
```

Tieši ar to tas redzami atšķiras no `done-testing`: `plan` izdrukā skaitu `1..2` augšā, pirms izpildās kaut viena pārbaude, turpretī `done-testing` to izdrukā pašās beigās. Jebkurā gadījumā ar `plan 2` izpilde gaida tieši divus testus; ja patiesībā izpildās mazāk (vai vairāk), kopa tiek ziņota kā neizdevusies. Izmantojiet `plan`, kad skaits ir noteikts un zināms, un `done-testing`, kad ērtāk ļaut ietvaram skaitīt pašam.

{% include nav.html %}
