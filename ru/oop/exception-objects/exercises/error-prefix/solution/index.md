---
title: 'Решение: Префикс сообщения'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Вывод

```
Error: timeout
```

## Комментарии

1. `.message` объекта исключения даёт текст, переданный в `die`.

1. Приписав его после `Error: `, мы получаем итоговую строку. Объект исключения — это просто
значение, поэтому его сообщением можно распорядиться как угодно.

{% include nav.html %}
