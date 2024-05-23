---
title: 'Solvo: Faktorio kun multi-funkcioj'
---

{% include menu.html %}

Ĉi tiu ekzerco temas denove pri faktorioj. Efektive, la tasko permesas al ni ilustri pli da trajtoj de Raku.

Kiam oni kalkulas faktorion komencante de la donita nombro kaj irante malsupren, vi devas halti kiam la nombro atingas 1. Kun multi-funkcioj, vi povas atingi tion per ekstraktado de la kazo kun `$n == 1` al aparta multi-funkcio.

## Kodo

Jen la solvo:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Trovu la programon en la dosiero [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/more-on-functions/factorial-with-multi-functions.raku).

## Eligo

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Komento

Notu, ke la eniga argumento estas eksplicite konvertita al entjero: `@*ARGS[0].Int`. Ĉi tio estas por eviti senfinan buklon kiam la eniga nombro estas `1`. En ĉi tiu kazo, la tipo de parametro pasita al la funkcio `factorial` estas [`IntStr`](/eo/essentials/typed-variables/allomorphs), kaj la unua multi-variaĵo ne povas kapti la vokon. Kontraste, kiam `factorial(2 - 1)` estas vokita rekursive, la argumento de la funkcio estas entjero, kio ebligas voki la unuan variaĵon.

{% include nav.html %}