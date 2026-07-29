---
title: Ограничения типов
---

{% include menu.html %}

В [разделе «Основы»](/ru/essentials/typed-variables/type-constraints/) вы видели, как задать тип переменной с помощью ограничения типа. Стоит подчеркнуть, что именно _контейнер_ обеспечивает это ограничение на значения, которые он может принимать.

Следующее объявление создаёт скалярный контейнер, который может хранить только целые числа:

```raku
my Int $int;
```

Типизированный контейнер принимает только значения, соответствующие его типу, поэтому все следующие присваивания допустимы:

```raku
my Int $int;

$int = 123;       # directly an integer
say $int;

$int = 100 + 23;  # the result is an integer
say $int;

$int = '123'.Int; # a string converted to an integer
say $int;
```

Raku не выполняет автоматического приведения типов в этом случае. Присвоение числа с плавающей запятой (которое в Raku является значением типа `Rat`) поэтому не допускается:

```raku
my Int $int;
$int = 123.45;
```

Ошибка возникает уже на этапе компиляции:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

Чтобы избежать ошибки, преобразуйте значение явно:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Не путайте две точки в `123.45.Int`. Первая — это десятичный разделитель; вторая вызывает метод `Int` для рационального (`Rat`) значения.

{% include nav.html %}
