---
title: 'Решение: Приведение ввода пользователя к числу'
---

{% include menu.html %}

Программа может быть такой простой:

## Код

```raku
my Int $n = prompt 'Введите число: ';
say $n;
```

🦋 Вы можете найти исходный код в файле [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/input-number.raku).

## Пример

Запустите программу и введите целое число, положительное или отрицательное:

```console
$ raku exercises/typed-variables/input-number.raku
Введите число: -42
-42
```

## Комментарии

Как мы уже [видели](/ru/essentials/typed-variables/allomorphs), возвращаемое значение `prompt` — это `IntStr`, которое можно присвоить переменной типа `Int` без приведения типов.

Однако обратите внимание, что программа завершится с исключением, если вы введете строку, которую нельзя преобразовать в целое число.

{% include nav.html %}