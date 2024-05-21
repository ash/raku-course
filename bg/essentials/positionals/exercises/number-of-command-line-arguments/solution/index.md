---
title: Решение на ‘Броят на аргументите от командния ред’
---

{% include menu.html %}

Решението е доста просто.

## Код

```raku
say @*ARGS.elems;
```

Алтернативно, можете да свържете всички методи:

```raku
@*ARGS.elems.say;
```

🦋 Намерете програмата във файла [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Изход

Тази програма изисква тест на два случая:

1. Няма подадени аргументи.
1. Подаден е някакъв ненулев брой аргументи.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}