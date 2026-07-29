---
title: Прочитайте константу
translations_gpt:
---

{% include menu.html %}

## Задача

Вам дан модуль в файле `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Напишите программу, которая загружает этот модуль с помощью `need` (а не `use`) и печатает
значение `$pi`. Помните, что `need` не импортирует имена, поэтому до переменной надо
добираться через имя модуля.

## Пример

```console
$ raku -I. read-pi.raku
3.14
```

## Решение

✅ [Посмотреть решение](solution)

{% include nav.html %}
