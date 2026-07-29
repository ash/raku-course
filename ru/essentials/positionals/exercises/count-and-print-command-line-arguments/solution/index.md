---
title: 'Решение: Подсчет и вывод аргументов командной строки'
---

{% include menu.html %}

В этой программе цикл `for` является хорошим выбором.

## Код

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Найдите программу в файле [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/count-and-print-arguments.raku).

## Вывод

Запустите программу и убедитесь, что она выводит аргументы и номера строк:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Обсуждение

Эта программа использует несколько полезных трюков. Во-первых, цикл `for` проходит по [диапазону, построенному с помощью `^`](/ru/essentials/ranges/excluding-endpoints). Таким образом, диапазон начинается с 0 и идет до (но не включая) значения `@*ARGS`. В этом контексте [он возвращает](/ru/essentials/positionals/arrays#size) длину массива.

Так как первый элемент массива имеет индекс `0`, а задача требует, чтобы мы считали строки с `1`, это простое смещение вычисляется [внутри блока кода](/ru/essentials/strings/code-interpolation) в строке: `"{$n + 1} ..."`.

{% include nav.html %}