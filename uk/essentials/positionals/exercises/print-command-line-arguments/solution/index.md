---
title: Рішення задачі «Друк аргументів командного рядка»
---

{% include menu.html %}

Програма отримує аргументи з командного рядка в масиві `@*ARGS`. Тому нам потрібно пройтися по його елементах.

## Код

```raku
.say for @*ARGS;
```

🦋 Знайдіть програму у файлі [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/print-command-line-arguments.raku).

## Вивід

Запустіть програму і переконайтеся, що вона друкує аргументи по одному на рядок:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}