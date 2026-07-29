---
title: 'Решение: Используйте конвертер'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

Программа `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Оба исходных файла можно найти в каталоге [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature).

## Вывод

```console
$ raku -I. temperature.raku 100
212
```

## Комментарии

1. `use Temperature` загружает модуль и импортирует экспортированную им подпрограмму `c-to-f`,
поэтому программа может вызывать её напрямую.

1. `sub MAIN($celsius)` получает аргумент командной строки, так что температура для перевода
выбирается при запуске программы, а не задаётся прямо в коде. Если запустить программу без
аргумента, Raku автоматически напечатает подсказку по использованию.

1. Модуль должен быть доступен — поэтому программа запускается с `-I.`, чтобы Raku искал
`Temperature.rakumod` в текущем каталоге. Перевод `100` °C даёт `212` °F.

{% include nav.html %}
