---
title: 'Розв''язання: Назвіть помилку'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 Вихідний код можна знайти у файлі [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Вивід

```
X::AdHoc
sub failed
```

## Коментарі

1. `die` стається всередині `risky`, але виняток мандрує вгору до викликача. `CATCH` у блоці, який викликав `risky`, його обробляє, — саме так зазвичай і працює обробка помилок: збій і його обробник не мусять бути в одній підпрограмі.

1. Звичайний `die` із рядком створює виняток `X::AdHoc`, про що й повідомляє `.^name`, а `.message` повертає текст, переданий до `die`.

{% include nav.html %}
