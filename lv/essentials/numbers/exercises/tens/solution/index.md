---
title: Risinājums uzdevumam ‘Desmitu skaits’
---

{% include menu.html %}

Šādi jūs varat atrisināt uzdevumu.

## Kods

```raku
my $n = prompt 'Ievadiet pozitīvu veselu skaitli: ';

say ($n % 100) div 10;
```

🦋 Pilnu kodu varat atrast failā [tens.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/tens.raku).

## Izvade

Palaidiet programmu un pārbaudiet dažus dažādus gadījumus:

* Trīsciparu apaļš skaitlis, piemēram, 120;
* Skaitlis, kas ir 100 reizinājums, piemēram, 400;
* Skaitlis, kas ir lielāks par 10, bet mazāks par 100.
* Skaitlis, kas ir mazāks par 10.

Skaitlim 234 programmas izvade izskatās šādi:

```console
$ raku exercises/numbers/tens.raku
Ievadiet pozitīvu veselu skaitli: 234
3
```

## Komentāri

Šajā risinājumā atkal tiek izmantota kombinācija ar modulo `%` un veselo dalījumu `div`.

Pievērsiet uzmanību atstarpei pirms atverošās iekavas. Tai ir jābūt tur; pretējā gadījumā jūs saņemsiet sintakses kļūdu. Mēs atgriezīsimies pie [šī aspekta](/lv/essentials/more-on-functions/mind-the-space) Raku funkciju sadaļā, bet pagaidām ierakstiet kodu, kā parādīts iepriekš, vai pievienojiet vēl vienu iekavu pāri, lai aptvertu funkcijas argumentu — šajā gadījumā atstarpe nav nepieciešama:

```raku
    say(($n % 100) div 10);
```

{% include nav.html %}