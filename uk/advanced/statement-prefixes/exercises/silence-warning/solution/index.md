---
title: 'Розв''язання: Приглушіть попередження'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Вихідний код можна знайти у файлі [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Вивід

```
Hello, !
```

## Коментарі

1. Інтерполяція невизначеного `$name` у рядок зазвичай спричиняє попередження «use of uninitialized value». Загортання виразу в `quietly` приглушує його, тож виводиться лише привітання.

1. Як і `do`, `quietly` повертає значення свого блоку, тож зібраний рядок (де відсутнє ім'я лишає порожній проміжок) зберігається в `$greeting`.

1. `quietly` лише ховає попередження — значення все одно залишається невизначеним. Якщо ж ви хочете *дати раду* відсутньому значенню, підставте типове за допомогою оператора «визначене або» `//`: `$name // 'friend'` дає `'friend'`, коли `$name` невизначена, тож `"Hello, " ~ ($name // 'friend') ~ "!"` виводить `Hello, friend!` узагалі без попереджень.

{% include nav.html %}
