---
title: 'Solution: Факториел с мулти-функции'
---

{% include menu.html %}

Това упражнение е отново за факториали. Всъщност, задачата ни позволява да илюстрираме повече възможности на Raku.

Когато изчислявате факториал, започвайки от даденото число и намалявайки надолу, трябва да спрете, когато числото стане 1. С мулти-функции можете да постигнете това, като извлечете случая с `$n == 1` в отделна мулти-функция.

## Код

Ето решението:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Намерете програмата във файла [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/more-on-functions/factorial-with-multi-functions.raku).

## Изход

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Коментар

Забележете, че входният аргумент е изрично конвертиран в цяло число: `@*ARGS[0].Int`. Това е за да се предотврати безкраен цикъл, когато входното число е `1`. В този случай, типът на параметъра, предаден на функцията `factorial`, е [`IntStr`](/bg/essentials/typed-variables/allomorphs), и първият мулти-вариант не може да улови извикването. За разлика от това, когато `factorial(2 - 1)` се извиква рекурсивно, аргументът на функцията е цяло число, което прави възможно извикването на първия вариант.

{% include nav.html %}