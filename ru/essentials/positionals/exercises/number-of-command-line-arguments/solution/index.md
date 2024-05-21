---
title: Решение задачи «Количество аргументов командной строки»
---

{% include menu.html %}

Решение довольно простое.

## Код

```raku
say @*ARGS.elems;
```

Или, можно объединить все методы в цепочку:

```raku
@*ARGS.elems.say;
```

🦋 Найдите программу в файле [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Вывод

Эта программа требует тестирования в двух случаях:

1. Аргументы не переданы.
1. Передано ненулевое количество аргументов.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}