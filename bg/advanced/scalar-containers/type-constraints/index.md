---
title: Ограничения на типове
translations_gpt:
---

{% include menu.html %}

В [частта Основи](/bg/essentials/typed-variables/type-constraints/) видяхте как да зададете типа на променлива чрез ограничение на типа. Струва си да подчертаем, че именно _контейнерът_ налага това ограничение върху стойностите, които може да приема.

Следната декларация създава скаларен контейнер, който може да съдържа само цели числа:

```raku
my Int $int;
```

Типизиран контейнер приема само стойности, които отговарят на неговия тип, така че всички следни присвоявания са валидни:

```raku
my Int $int;

$int = 123;       # directly an integer
say $int;

$int = 100 + 23;  # the result is an integer
say $int;

$int = '123'.Int; # a string converted to an integer
say $int;
```

Raku не извършва автоматично преобразуване на типовете в този случай. Присвояването на число с плаваща запетая (което е стойност от тип `Rat` в Raku) следователно не е позволено:

```raku
my Int $int;
$int = 123.45;
```

Получавате грешка още по време на компилация:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

За да избегнете грешката, преобразувайте стойността изрично:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Не се бъркайте от двете точки в `123.45.Int`. Първата е десетичната точка; втората извиква метода `Int` върху рационалната (`Rat`) стойност.

{% include nav.html %}
