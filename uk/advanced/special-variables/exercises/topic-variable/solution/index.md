---
title: 'Розв''язання: Топічна змінна'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 Вихідний код можна знайти у файлі [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Вивід

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Коментарі

1. Цикл `for` по черзі встановлює топічну змінну `$_` в кожен елемент, тож блок виконується тричі, і `$_` дорівнює `'apple'`, потім `'fig'`, потім `'cherry'`.

1. Усередині рядка `$_` інтерполює поточне слово, а виклик `.chars` із провідною крапкою — скорочення від `$_.chars` — дає його довжину. Обидва посилаються на той самий топік, тому кількість завжди відповідає слову в рядку.

{% include nav.html %}
