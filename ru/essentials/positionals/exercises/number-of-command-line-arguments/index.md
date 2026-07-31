---
title: Количество аргументов командной строки
---

{% include menu.html %}

## Задача

Напишите программу, которая полным предложением сообщает, сколько аргументов она получила из командной строки. Позаботьтесь о правильной грамматике: используйте слово `argument`, если передан ровно один аргумент, и `arguments` во всех остальных случаях.

## Пример

Вот как программа должна реагировать:

```console
$ raku number-of-command-line-arguments.raku make them count us now
You passed 5 arguments.

$ raku number-of-command-line-arguments.raku solo
You passed 1 argument.
```

## Решение

✅ [Посмотреть решение](solution)

{% include nav.html %}