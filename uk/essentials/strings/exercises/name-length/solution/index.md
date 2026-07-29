---
title: 'Solution: Довжина імені'
---

{% include menu.html %}

## Код

Ось рішення задачі:

```raku
my $name = prompt 'What is your name? ';
say $name.chars;
```

🦋 Ви можете знайти вихідний код у файлі [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/name-length.raku).

## Вивід

Запустіть програму та введіть ім'я.

```console
$ raku exercises/strings/name-length.raku 
What is your name? Alexandra
9
```

## Коментарі

У цій програмі ми отримуємо довжину рядка, викликаючи метод `chars` для змінної `$name`. Оскільки змінна містить рядок, метод повертає його довжину.

{% include nav.html %}