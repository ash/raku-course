---
title: 'Solution: Надрукувати попередження'
---

{% include menu.html %}

## Код

Ось рішення:

```raku
my $age = prompt 'What is your age? ';

if $age < 0 {
    note 'You entered a negative number!';
}
else {
    say "Your age is $age";
}
```

🦋 Знайдіть програму у файлі [print-the-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/built-in-functions-for-printing/print-the-warning.raku).

## Вивід

Кілька можливих випадків:

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
What is your age? 20
Your age is 20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
What is your age? -1
You entered a negative number!
```

Щоб переконатися, що повідомлення про помилку виводиться до `STDERR`, перенаправте вивід. Запит на введення віку не з'явиться, але ви все одно можете ввести число. Попередження залишається видимим.

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null
20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null 
-1
You entered a negative number!
```

{% include nav.html %}