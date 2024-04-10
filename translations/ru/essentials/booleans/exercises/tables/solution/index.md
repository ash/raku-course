---
title: Решение для ‘Таблицы истинности’
---

{% include menu.html %}

Вот возможная программа, которая выводит все результаты логических операций.

## Код

```raku
say 'True && True is ', True && True; 
say 'True && False is ', True && False;
say 'False && True is ', False && True;
say 'False && False is ', False && False;

say 'True || True is ', True || True; 
say 'True || False is ', True || False;
say 'False || True is ', False || True;
say 'False || False is ', False || False;

say 'True ^^ True is ', True ^^ True; 
say 'True ^^ False is ', True ^^ False;
say 'False ^^ True is ', False ^^ True;
say 'False ^^ False is ', False ^^ False;
```

🦋 Вы можете найти исходный код в файле [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/tables.raku).

## Вывод

Запустите программу, она выведет следующую таблицу:

```console
$ raku tables.raku
True && True is True
True && False is False
False && True is False
False && False is False
True || True is True
True || False is True
False || True is True
False || False is False
True ^^ True is Nil
True ^^ False is True
False ^^ True is True
False ^^ False is False
```

## Комментарии

Интересно, что из-за более высокого приоритета логических операций вам не нужно
заключать их в скобки. Однако, это не так, если вы используете конкатенацию
строк:

```raku
say 'True && True is ' ~ (True && True);
```

Еще один вариант — это использование [интерполяции кода](/essentials/strings/code-interpolation).

{% include nav.html %}
