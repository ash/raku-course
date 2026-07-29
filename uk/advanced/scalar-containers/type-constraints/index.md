---
title: Обмеження типів
translations_gpt:
---

{% include menu.html %}

У [частині «Основи»](/uk/essentials/typed-variables/type-constraints/) ви бачили, як задати тип змінної за допомогою обмеження типу. Варто наголосити, що саме _контейнер_ накладає це обмеження на значення, які йому дозволено приймати.

Наведене оголошення створює скалярний контейнер, який може містити лише цілі числа:

```raku
my Int $int;
```

Типізований контейнер приймає лише ті значення, що відповідають його типу, тож усі наведені присвоєння дійсні:

```raku
my Int $int;

$int = 123;       # безпосередньо ціле число
say $int;

$int = 100 + 23;  # результат є цілим числом
say $int;

$int = '123'.Int; # рядок, перетворений на ціле число
say $int;
```

У цьому випадку Raku не виконує автоматичного приведення типів. Тому присвоєння числа з рухомою комою (яке в Raku є значенням `Rat`) не дозволено:

```raku
my Int $int;
$int = 123.45;
```

Ви отримуєте помилку вже під час компіляції:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

Щоб уникнути помилки, перетворіть значення явно:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Хай вас не бентежать дві крапки в `123.45.Int`. Перша — це десяткова крапка; друга викликає метод `Int` для раціонального (`Rat`) значення.

{% include nav.html %}
