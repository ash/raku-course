---
title: 'Solution: Дослідження результату `prompt` — Рядки'
---

{% include menu.html %}

## Код

Ось повна програма, яка виконує завдання та виводить як введений рядок, так і його тип.

```raku
my $name = prompt 'What is your name? ';
say $name;
say $name.WHAT;
```

🦋 Ви можете знайти вихідний код у файлі [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/prompt-strings.raku).

## Тестові запуски

Запустіть програму кілька разів і введіть різні імена. Програма відображає введення та також повідомляє, що змінна містить рядок, іншими словами, об'єкт типу `Str`.

```console
$ raku exercises/data-types/prompt-strings.raku
What is your name? Andrey
Andrey
(Str)
```

Тепер запустіть програму знову, введіть кілька пробілів замість імені та натисніть Enter.

```console
$ raku exercises/data-types/prompt-strings.raku
What is your name?    

(Str)
```

Ми не бачимо виводу, але бачимо, що тип змінної все ще `Str`.

{% include nav.html %}