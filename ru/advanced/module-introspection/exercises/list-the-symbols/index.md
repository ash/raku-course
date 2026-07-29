---
title: Список символов
translations_gpt:
---

{% include menu.html %}

## Задача

Дан модуль в файле `Circle.rakumod`, определяющий две переменные `our`:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Напишите программу, которая использует модуль и выводит сначала количество имён, определённых в пакете модуля, а затем сами имена в алфавитном порядке.

## Пример

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Решение

✅ [Смотрите решение](solution)

{% include nav.html %}
