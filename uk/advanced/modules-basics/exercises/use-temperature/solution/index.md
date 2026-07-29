---
title: 'Розв''язання: Скористайтеся перетворювачем'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

Програма `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Обидва файли з вихідним кодом можна знайти в каталозі [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature).

## Вивід

```console
$ raku -I. temperature.raku 100
212
```

## Коментарі

1. `use Temperature` завантажує модуль та імпортує його експортовану підпрограму `c-to-f`, тож програма може викликати її напряму.

1. `sub MAIN($celsius)` отримує аргумент командного рядка, тож температуру для переведення обирають під час запуску програми, а не жорстко задають у коді. Запущений без аргументу, Raku автоматично виводить повідомлення про використання.

1. Модуль має бути досяжним, — саме тому програму запускають з `-I.`, щоб Raku шукав `Temperature.rakumod` у поточному каталозі. Переведення `100` °C дає `212` °F.

{% include nav.html %}
