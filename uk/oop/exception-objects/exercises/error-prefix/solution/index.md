---
title: 'Розв''язання: Префікс до повідомлення'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
{
    die 'timeout';

    CATCH {
        default {
            say 'Error: ' ~ .message;
        }
    }
}
```

🦋 Вихідний код можна знайти у файлі [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Вивід

```
Error: timeout
```

## Коментарі

1. `.message` об'єкта винятку дає текст, переданий до `die`.

1. Приєднання його після `Error: ` будує підсумковий рядок. Об'єкт винятку є просто значенням, тож його повідомленням можна користуватися як завгодно.

{% include nav.html %}
