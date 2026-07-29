---
title: 'Решение: Верхний регистр с react'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Исходный код можно найти в файле [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Вывод

```
[A B C]
```

## Комментарии

1. Тело `whenever` выполняется по разу на каждое значение, переводит его в верхний регистр
и добавляет в `@collected`.

1. `react` дожидается окончания единственного supply, поэтому к моменту выполнения `say` массив
содержит все три значения по порядку: `[A B C]`.

1. У supply есть собственные списочные методы, поэтому переводить в верхний регистр можно
не в теле, а прямо в потоке — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) {
@collected.push($_) }`, — и результат будет тот же. `.map` у supply преобразует каждое значение
на лету; вопрос лишь в том, к чему относится преобразование — к потоку или к реакции.

{% include nav.html %}
