---
title: 'Розв''язання: Повідомити й відновитися'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $timeout = 30;

{
    die 'config missing';
    $timeout = 60;

    CATCH {
        default {
            say "warning: {.message}; keeping default";
        }
    }
}

say "timeout is $timeout seconds";
```

🦋 Вихідний код можна знайти у файлі [report-and-recover.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/report-and-recover.raku).

## Вивід

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Коментарі

1. Коли `die` кидає виняток, решта блоку полишається, — тож рядок `$timeout = 60` ніколи не виконується, і `$timeout` зберігає своє типове значення `30`.

1. `CATCH` обробляє виняток (виводячи попередження), тож програма не зупиняється. Вона продовжує з типовим значенням, а це саме те, що означає *відновитися* після помилки: відзначити негаразд, вдатися до чогось безпечного й рушити далі.

{% include nav.html %}
