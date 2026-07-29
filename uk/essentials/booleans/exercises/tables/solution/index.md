---
title: 'Solution: Логічні таблиці'
---

{% include menu.html %}

Ось можливий програмний код, який виводить всі результати булевих операцій.

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

🦋 Ви можете знайти повний код у файлі [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/tables.raku).

## Вивід

Запустіть програму, і вона виведе наступну таблицю.

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

## Коментарі

Зверніть увагу, що через вищий пріоритет булевих операцій, вам не потрібно брати їх у дужки. Це, однак, не стосується випадків, коли ви використовуєте конкатенацію рядків:

```raku
say 'True && True is ' ~ (True && True);
```

Альтернативно, ви можете використовувати [інтерполяцію коду](/uk/essentials/strings/code-interpolation).

{% include nav.html %}