---
title: Risinājums ‘Pārbaudot uzvednes rezultātu — Skaitļi’
---

{% include menu.html %}

## Kods

Šeit ir pilna programma, kas atrisina problēmu un izdrukā gan ievadīto vērtību, gan tās tipu.

```raku
my $n = prompt 'Enter a number: ';
say $n;
say $n.WHAT;
```

🦋 Avota kodu var atrast failā [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-numbers.raku).

## Testa izpildes

Palaidiet programmu vairākas reizes un ievadiet dažāda veida skaitļus.

### Veseli skaitļi

Sāksim ar veseliem skaitļiem, gan pozitīviem, gan negatīviem.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 10
10
(IntStr)
```

Rezultāta tips ir `IntStr`. Tas ir iebūvēts tips, kam ir gan `Int`, gan `Str` īpašības.

### Racionāli skaitļi

Tagad mēģināsim racionālu skaitli. Atcerieties, ka Raku notācijā ar decimālo punktu tiek izveidots `Rat` skaitlis, nevis peldošā komata skaitlis.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 3.14
3.14
(RatStr)
```

Šoreiz programma saka, ka dati `$n` ir `RatStr` tipa, kas apzīmē kombinētu tipu gan `Rat`, gan `Str`.

### Peldošā komata skaitļi

Visbeidzot, mēģiniet skaitli zinātniskajā notācijā. Šajā brīdī jums vajadzētu būt iespējai uzminēt rezultātu.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 5e-14
5e-14
(NumStr)
```

Patiesi, jaunā vērtība ir `NumStr` tipa.

{% include nav.html %}