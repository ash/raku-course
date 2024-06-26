---
title: Решение для ‘Количество десятков’
---

{% include menu.html %}

Вот как вы можете выполнить эту задачу.

## Код

```raku
my $n = prompt 'Enter a positive integer number: ';

say ($n % 100) div 10;
```

🦋 Вы можете найти исходный код в файле [tens.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/tens.raku).

## Вывод

Запустите программу, чтобы проверить несколько разных случаев:

* Трехзначное круглое число, такое как 120;
* Число, кратное 100, например, 400;
* Число, которое больше 10, но меньше 100;
* Число, которое меньше 10.

Для числа 234 вывод программы выглядит следующим образом:

```console
$ raku exercises/numbers/tens.raku
Enter a positive integer number: 234
3
```

## Комментарии

В этом решении снова используется комбинация из остатка от деления `%` и
целочисленного деления `div`.

Обратите внимание на пробел перед открывающейся скобкой. Он обязателен, иначе
будет синтаксическая ошибка. Мы вернемся к [этой
особенности](/ru/essentials/more-on-functions/mind-the-space) Raku в главе про
функции, но пока что, напишите код как показано выше, либо добавьте еще одну
пару скобок вокруг аргумента функции. Пробел в таком случае не нужен:

```raku
    say(($n % 100) div 10);
```

{% assign human=1 %}
{% include nav.html %}
