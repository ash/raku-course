---
title: 'Solution: Принтиране на аргументите на командния ред'
---

{% include menu.html %}

Програмата получава аргументите от командния ред в масива `@*ARGS`. Така че, трябва да обходим неговите елементи.

## Код

```raku
.say for @*ARGS;
```

🦋 Намерете програмата във файла [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/print-command-line-arguments.raku).

## Изход

Стартирайте програмата и се уверете, че отпечатва аргументите ред по ред:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}