---
title: Розв'язок ‘Кількість аргументів командного рядка’
---

{% include menu.html %}

Розв'язок досить простий.

## Код

```raku
say @*ARGS.elems;
```

Альтернативно, ви можете з'єднати всі методи:

```raku
@*ARGS.elems.say;
```

🦋 Знайдіть програму у файлі [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Вивід

Ця програма вимагає тестування двох випадків:

1. Не передано жодного аргументу.
1. Передано деяку ненульову кількість аргументів.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}