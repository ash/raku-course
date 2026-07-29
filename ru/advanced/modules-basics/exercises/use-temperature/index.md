---
title: Используйте конвертер
translations_gpt:
---

{% include menu.html %}

## Задача

Вам дан модуль в файле `Temperature.rakumod`:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Напишите отдельную программу, которая с помощью этого модуля переводит температуру
по Цельсию — переданную как аргумент командной строки — в градусы Фаренгейта и печатает
результат.

## Пример

```console
$ raku -I. temperature.raku 100
212
```

## Решение

✅ [Посмотреть решение](solution)

{% include nav.html %}
