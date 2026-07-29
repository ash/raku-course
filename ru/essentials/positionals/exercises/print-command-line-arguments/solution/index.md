---
title: 'Решение: Вывод аргументов командной строки'
---

{% include menu.html %}

Программа получает аргументы из командной строки в массиве `@*ARGS`. Поэтому нам нужно пройтись по его элементам в цикле.

## Код

```raku
.say for @*ARGS;
```

🦋 Найдите программу в файле [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/print-command-line-arguments.raku).

## Вывод

Запустите программу и убедитесь, что она печатает аргументы построчно:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}