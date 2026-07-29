---
title: 'Solution: Привітати людину'
---

{% include menu.html %}

Ось можливе рішення задачі.

## Код

```raku
my $name = prompt 'What is your name? ';
say 'Hello, ', $name, '!';
```

🦋 Ви можете знайти вихідний код у файлі [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/greet-a-person.raku).

## Вивід

Запустіть програму і введіть ім'я, коли буде запит:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
What is your name? Inge
Hello, Inge!
```

## Коментарі

1. Ця програма використовує скалярну змінну `$name` для збереження рядка, який був введений користувачем у відповідь на запит. Коли змінна використовується у списку, який ви передаєте процедурі `say`, ви отримуєте ім'я в повідомленні.

1. Є кращий спосіб вирішити цю проблему, використовуючи інтерполяцію рядків. Давайте повернемося до цієї проблеми трохи пізніше.

{% include nav.html %}