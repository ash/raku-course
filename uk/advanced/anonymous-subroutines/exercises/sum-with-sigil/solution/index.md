---
title: 'Solution: Сума з сигілом `&`'
translations_gpt: Розв'язок задачі «Сума з сигілом `&`»
---

{% include menu.html %}

Ось можливий розв'язок завдання.

## Код

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Ви можете знайти вихідний код у файлі [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Вивід

```
5
```

## Коментарі

1. Стрілочний блок перераховує два параметри, `-> $a, $b`, тому анонімна підпрограма приймає два аргументи.

1. Оскільки змінна оголошена з сигілом `&`, її можна викликати як `add(2, 3)`, точно так само, як іменовану підпрограму — без сигіла при виклику — і отримати `5`.

{% include nav.html %}
