---
title: 'Розв''язання: Кількість аргументів командного рядка'
---

{% include menu.html %}

Кількість аргументів так само дає `@*ARGS.elems`, але цього разу з нею треба щось зробити, а не просто вивести. Збережіть кількість у змінній, а потім оберіть потрібне слово тернарним оператором:

## Код

```raku
my $n = @*ARGS.elems;
my $word = $n == 1 ?? 'argument' !! 'arguments';
say "You passed $n $word.";
```

🦋 Знайдіть програму у файлі [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/number-of-command-line-arguments.raku).

## Вивід

Варто перевірити три цікаві випадки: жодного аргументу, рівно один і багато. Лише другий використовує форму однини.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
You passed 0 arguments.

$ raku exercises/positionals/number-of-command-line-arguments.raku solo
You passed 1 argument.

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
You passed 7 arguments.
```

{% include nav.html %}
