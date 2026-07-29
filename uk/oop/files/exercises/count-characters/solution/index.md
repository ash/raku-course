---
title: 'Розв''язання: Порахуйте символи'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
spurt 'data.txt', 'Raku';

say slurp('data.txt').chars;
```

🦋 Вихідний код можна знайти у файлі [count-characters.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/count-characters.raku).

## Вивід

```
4
```

## Коментарі

1. `spurt` записує рядок `Raku` у файл.

1. `slurp` читає його назад як рядок, а `.chars` рахує його символи — чотири.

1. Якщо ви зазирнете у файл, то й справді побачите лише чотири символи; символ переходу рядка не додається.

{% include nav.html %}
