---
title: 'Risinājums: Atkārto līdz pietiek'
---

{% include menu.html %}

Šī programma prasa ciklu, kas tiek pārtraukts, kad lietotājs ievada iepriekš noteiktu vārdu.

## Kods

Ir vairāki līdzīgi veidi, kā atrisināt uzdevumu ar `while`, `until` vai `repeat`. Viens no tiem ir parādīts zemāk.

```raku
my $word;
repeat {
    $word = prompt 'Tavs vārds: ';
    say $word;
} while $word ne 'pietiek';

say 'Labi, pabeigts.';
```

🦋 Atrodi programmu failā [echo-until-enough.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/echo-until-enough.raku).

## Izvade

Palaid programmu, ievadi dažus dažādus vārdus un tad pārtrauc ciklu.

```console
$ raku exercises/loops/echo-until-enough.raku
Tavs vārds: šis
šis
Tavs vārds: ir
ir
Tavs vārds: mans
mans
Tavs vārds: vārds
vārds
Tavs vārds: pietiek
pietiek
Labi, pabeigts.
```

## Komentārs

Ņem vērā, ka tu deklarē mainīgo `$word` _pirms_ cikla, jo `while` tests atrodas ārpus cikla ķermeņa robežām. Ja mainīgais tiktu definēts cikla iekšpusē, tas nebūtu redzams testā.

{% include nav.html %}