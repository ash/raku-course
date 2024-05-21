---
title: Typed parameters of functions
---

{% include menu.html %}

Функционалните параметри в Raku могат да бъдат ограничени по тип. Това е много подобно на [типизираните променливи](/bg/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

Функцията сега изисква нейните аргументи да бъдат цели числа.

```raku
say add(10, 20);
# say add(pi, e); # Грешка
```

Опитът да се предаде параметър от какъвто и да е друг тип, различен от `Int`, е грешка по време на компилация.

```
$ raku t.raku
===SORRY!=== Error while compiling t.raku
Calling add(Num, Num) will never work with declared signature (Int $x, Int $y)
at t.raku:5
------> say ⏏add(pi, e);
```

Обърнете внимание, че Raku няма автоматично да конвертира типовете, дори ако това е възможно в други случаи.

```raku
# say add('3', '4'); # Грешка
say '3' + '4'; # ОК и е 7
```

%%tipblock
## Как да разберем дали е грешка по време на компилация
Ако съобщението за грешка започва с `===SORRY!=== Error while compiling`, това означава, че грешката е възникнала по време на компилация.
%%/tipblock

{% include nav.html %}