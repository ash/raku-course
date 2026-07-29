---
title: 'Решение: Привет, Интерполяция!'
---

{% include menu.html %}

## Код

Вот одно возможное решение этой проблемы:

```raku
my $name = prompt 'What is your name? ';
say "Hello, $name!";
```

🦋 Вы можете найти исходный код в файле [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-interpolation.raku).

## Вывод

Запустите программу, и она перейдет в состояние ожидания вашего ввода. После
того, как вы введете имя и нажмете Enter, программа продолжится и напечатает следующее:

```console
$ raku exercises/strings/hello-concatenation.raku
What is your name? Raku
Hello, Raku!
```

## Комментарии

В этот раз строка заключена в двойные кавычки. В двойных кавычках переменные
интерполируются, поэтому их содержимое подставляется в строку.

{% assign human=1 %}
{% include nav.html %}
