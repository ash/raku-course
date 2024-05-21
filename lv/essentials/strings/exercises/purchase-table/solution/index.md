---
title: Risinājums 'Pirkuma tabulai'
---

{% include menu.html %}

## Kods

Šeit ir iespējams risinājums:

```raku
my $chair-price = 20.57;
my $chairs = 4;
my $chairs-total = $chair-price * $chairs;

my $table-price = 50.18;
my $tables = 1;
my $tables-total = $table-price * $tables;

say "Item\tPrice\tN\tTotal";
say "Chairs\t\$$chair-price\t$chairs\t\$$chairs-total";
say "Tables\t\$$table-price\t$tables\t\$$tables-total";
```

Visi skaitļi ir cieti kodēti un saglabāti vairākos mainīgajos. Mēs arī izmantojam reizināšanas operatoru `*`, lai aprēķinātu rezultātu. Mēs uzzināsim vairāk par operatoriem nākamajās šī kursa sadaļās, bet šajā brīdī konstrukcijai, piemēram, `$chair-price * $chairs`, nevajadzētu radīt jautājumus.

Trīs rindas, kas ģenerē izvadi, izdrukā tabulas trīs rindas, ieskaitot tās galveni. Pamaniet, kā kolonnas ir atdalītas ar tabulācijas rakstzīmēm `\t`. Datu rindās mēs arī redzam aizbēgtu dolāra rakstzīmi: `\$`, kā arī dažādus mainīgos, kurus vēlamies interpolēt.

🦋 Jūs varat atrast pirmkodu failā [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/purchase-table.raku).

## Izvade

Palaidiet programmu un redziet, kā tā izdrukā tabulu:

```
$ raku exercises/strings/purchase-table.raku
Item    Price   N      Total
Chairs  $20.57  4      $82.28
Tables  $50.18  1      $50.18
```

## Komentāri

Vai pamanījāt domuzīmes mainīgo nosaukumos, piemēram, `$chair-price` vai `$tables-total`? Tas ir pilnīgi pieņemams veids, kā nosaukt mainīgos Raku.

Nesajaucieties ar diviem blakus esošiem dolāra simboliem. Raku tos lasa atsevišķi. Piemēram, apakšvirknē `\$$price` pirmais dolāra simbols ir aizbēgts un tādējādi pārstāv pats sevi, kamēr otrais ir daļa no mainīgā nosaukuma `$price`.

Visas virknes ir citētas dubultajās pēdiņās, lai ļautu interpolēt mainīgos un speciālās rakstzīmes.

Atgriezīsimies pie šī uzdevuma vēlreiz pēc tam, kad būsim iepazinušies ar masīviem un hešiem.

{% include nav.html %}