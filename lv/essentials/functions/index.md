---
title: Funkciju izveide un izsaukšana Raku
---

{% include menu.html %}

Jūs esat sasniedzis pirmās kursa daļas pēdējo sadaļu. Pabeidzot to, jums būs visas nepieciešamās zināšanas, lai izveidotu praktiski _jebkuru_ programmu Raku. Šīs sadaļas tēma ir _funkcijas_, vai _apakšprogrammas_, vai pat vienkārši _rutīnas_.

Funkcija ir atkārtoti izmantojama koda daļa ar savu nosaukumu. Jūs varat _izsaukt_ funkcijas no dažādām vietām programmā.

## Funkcijas izveide

Lai izveidotu funkciju, izmantojiet atslēgvārdu `sub`, kam seko funkcijas nosaukums. Funkcijas ķermenis ir iekļauts pāra figūriekavās.

```raku
sub greet {
    say 'Hello, World!';
}
```

## Funkcijas izmantošana

Lai izmantotu funkciju, vienkārši ievietojiet tās nosaukumu vietā, kur jums nepieciešams to izsaukt. Raku valodā funkcijas definīcija var atrasties pirms vai pēc vietas, kur funkcija tiek izmantota.

```raku
say 'Šis ir tas, ko parasti izdrukā pirmā programma:';
greet;    

sub greet {
    say 'Hello, World!';
}
```

Programma izdrukā abas ziņas:

```console
$ raku t.raku
Šis ir tas, ko parasti izdrukā pirmā programma:
Hello, World!
```

Tagad aplūkosim citus funkciju izveides un izmantošanas aspektus.

{% include nav.html %}