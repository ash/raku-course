---
title: 'Решение: Четный или нечетный'
---

{% include menu.html %}

Тело функции довольно маленькое, что является веской причиной для опущения как оператора `return`, так и точки с запятой в конце строки.

## Код

Вот решение:

```raku
sub f($n) {
    $n %% 2 ?? 'Even' !! 'Odd'
}

say f(10);
say f(5);
say f(0);
say f(3);
```

🦋 Найдите программу в файле [odd-or-even.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/odd-or-even.raku).

## Вывод

```console
$ raku exercises/functions/odd-or-even.raku
Even
Odd
Even
Odd
```

{% include nav.html %}