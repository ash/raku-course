---
title: 'Решение: Переменная-тема'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 Исходный код можно найти в файле [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Вывод

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Комментарии

1. Цикл `for` устанавливает переменную темы `$_` в каждый элемент по очереди, поэтому блок выполняется три раза: `$_` равна `'apple'`, затем `'fig'`, затем `'cherry'`.

1. Внутри строки `$_` интерполирует текущее слово, а вызов с начальной точкой `.chars` -- сокращение для `$_.chars` -- возвращает его длину. Оба обращаются к одной и той же переменной темы, поэтому количество символов всегда соответствует слову в строке.

{% include nav.html %}
