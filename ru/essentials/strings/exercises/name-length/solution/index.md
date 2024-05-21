---
title: Решение для ’Длина имени‘
---

{% include menu.html %}

## Код

Вот решение к этой задаче:

```raku
my $name = prompt 'What is your name? ';
say $name.chars;
```

🦋 Вы можете найти исходный код в файле [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/name-length.raku).

## Вывод

Запустите программу и введите имя.

```console
$ raku exercises/strings/name-length.raku 
What is your name? Alexandra
9
```

## Комментарии

В этой программе мы получаем длину строки, вызывая метод `chars` для переменной
`$name`. Так как переменная содержит строку, метод возвращает ее длину.

{% assign human=1 %}
{% include nav.html %}
