---
title: 'Решение: Разложите по двум массивам'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Исходный код можно найти в файле [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Вывод

```
[4 7]
[42 100 15]
```

## Комментарии

1. Тело `whenever` — обычный код, поэтому оно может не только собирать: здесь оно **принимает
решение**, направляя каждое приходящее значение в `@big` или в `@small`. Внутри каждого массива
значения сохраняют порядок потока.

1. Блок react ждёт окончания потока, поэтому к моменту печати оба массива уже заполнены целиком.

{% include nav.html %}
