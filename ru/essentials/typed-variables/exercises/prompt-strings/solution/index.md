---
title: 'Решение: Посмотрите результаты `prompt` — Строки'
---

{% include menu.html %}

## Код

Вот полная программа, которая выполняет задачу и выводит как введенную строку, так и её тип.

```raku
my $name = prompt 'What is your name? ';
say $name;
say $name.WHAT;
```

🦋 Исходный код можно найти в файле [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/prompt-strings.raku).

## Тестовые запуски

Запустите программу несколько раз и введите разные имена. Программа выводит введенные данные и также сообщает, что переменная содержит строку, другими словами, объект типа `Str`.

```console
$ raku exercises/data-types/prompt-strings.raku
What is your name? Andrey
Andrey
(Str)
```

Теперь снова запустите программу, введите несколько пробелов вместо имени и нажмите Enter.

```console
$ raku exercises/data-types/prompt-strings.raku
What is your name?    

(Str)
```

Мы не видим вывода, но видим, что тип переменной по-прежнему `Str`.

{% include nav.html %}