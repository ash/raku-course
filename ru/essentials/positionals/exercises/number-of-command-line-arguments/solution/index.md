---
title: 'Решение: Количество аргументов командной строки'
---

{% include menu.html %}

Количество аргументов по-прежнему берётся из `@*ARGS.elems`, но на этот раз с ним нужно что-то сделать, а не просто вывести его. Сохраните количество в переменной, а затем выберите подходящее слово с помощью тернарного оператора:

## Код

```raku
my $n = @*ARGS.elems;
my $word = $n == 1 ?? 'argument' !! 'arguments';
say "You passed $n $word.";
```

🦋 Исходный код можно найти в файле [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/number-of-command-line-arguments.raku).

## Вывод

Стоит проверить три интересных случая: аргументов нет, ровно один и много. Только во втором случае используется форма единственного числа.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
You passed 0 arguments.

$ raku exercises/positionals/number-of-command-line-arguments.raku solo
You passed 1 argument.

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
You passed 7 arguments.
```

{% include nav.html %}