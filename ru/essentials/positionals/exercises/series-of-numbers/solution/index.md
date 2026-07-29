---
title: 'Решение: Вывод серии чисел'
---

{% include menu.html %}

Существует несколько способов решить данную задачу.

## Код 1

Первое решение более в стиле Raku и компактное.

```raku
my $begin = prompt 'Начало: ';
my $end = prompt 'Конец: ';

.say for $begin .. $end;
```

🦋 Найдите программу в файле [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/series-of-numbers.raku).

## Код 2

Второе возможное решение может использовать оператор `loop`.

```raku
my $begin = prompt 'Начало: ';
my $end = prompt 'Конец: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Найдите программу в файле [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/series-of-numbers-loop.raku).

Как видите, первый вариант значительно короче и выразительнее.

## Обсуждение

В первом варианте программы используется [постфиксная форма цикла `for`](/ru/essentials/loops/postfix-for). Во второй программе выбран оператор `loop`.

## Вывод

Введите два числа в консоли и запустите программу. Оба варианта дают одинаковый результат.

```console
$ raku exercises/positionals/series-of-numbers.raku
Начало: 15
Конец: 19
15
16
17
18
19
```

{% include nav.html %}