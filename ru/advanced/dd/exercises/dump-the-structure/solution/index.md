---
title: 'Решение: Вывод структуры данных'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Исходный код можно найти в файле [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Вывод

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Комментарии

1. `dd @data` выводит представление содержимого массива в виде, похожем на код. Вывод идёт в стандартный поток ошибок.

1. Метод `.raku` возвращает то же представление в виде строки, которая затем встраивается в обычное сообщение с помощью интерполяции кода и выводится через `say` в стандартный поток вывода.

1. Две строки выглядят одинаково, но проходят через разные потоки вывода: первая приходит от `dd` (стандартный поток ошибок), вторая от `say` (стандартный поток вывода). Сравните:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
