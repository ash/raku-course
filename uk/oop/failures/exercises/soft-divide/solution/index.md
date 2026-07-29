---
title: 'Розв''язання: М''яка обернена величина'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 Вихідний код можна знайти у файлі [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Вивід

```
0.25
undefined
```

## Коментарі

1. `reciprocal(4)` звичайно повертає `1 / 4`, тобто `0.25`.

1. `reciprocal(0)` викликає `fail`, тож повертає `Failure`, який є невизначеним. Оператор `//` повертає свою праву частину щоразу, коли ліва невизначена, тож ми отримуємо запасне `undefined`.

1. Використання `//` вважається обробкою збою: воно перевіряє визначеність, не користуючись значенням, тож `Failure` лишається м'яким і ніколи не кидається як справжній виняток.

{% include nav.html %}
