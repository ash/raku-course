---
title: 'Розв''язання: Два типи винятків'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class TooSmall is Exception {
    method message { 'too small' }
}

class TooBig is Exception {
    method message { 'too big' }
}

for TooSmall, TooBig -> $type {
    {
        $type.new.throw;

        CATCH {
            when TooSmall { say 'small' }
            when TooBig   { say 'big' }
        }
    }
}
```

🦋 Вихідний код можна знайти у файлі [two-exceptions.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/two-exceptions.raku).

## Вивід

```
small
big
```

## Коментарі

1. Цикл кидає `TooSmall` на першому проході й `TooBig` на другому, кожен усередині власного блоку з власним `CATCH`.

1. Фазер `CATCH` має гілку `when` для кожного типу винятку. На кожному проході виконується лише та гілка, що відповідає кинутому типу, — тож перший прохід виводить `small`, а другий `big`. Саме так один набір обробників по-різному реагує на різні роди помилок.

{% include nav.html %}
