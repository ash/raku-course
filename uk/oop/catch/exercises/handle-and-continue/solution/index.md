---
title: 'Розв''язання: Обробити й продовжити'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
for <ok bad ok> -> $item {
    {
        die 'boom' if $item eq 'bad';
        say "processed $item";

        CATCH {
            default {
                say "skipped ($item): {.message}";
            }
        }
    }
}
```

🦋 Вихідний код можна знайти у файлі [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Вивід

```
processed ok
skipped (bad): boom
processed ok
```

## Коментарі

1. Фазер `CATCH` міститься всередині блоку для окремого елемента, тож він обробляє `die` лише для цього одного елемента. Оскільки виняток обробляється там, він ніколи не виривається назовні, щоб спинити весь цикл.

1. Це типове застосування `CATCH` замість `try`: збій на одній ітерації розв'язується на місці, а цикл переходить до наступного елемента. Середній елемент зазнає невдачі, але два `ok` усе одно обробляються.

{% include nav.html %}
