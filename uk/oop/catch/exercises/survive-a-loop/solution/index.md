---
title: 'Розв''язання: Пережити цикл'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
for 1, 2, 3 -> $n {
    if $n == 2 {
        die "bad: $n";
    }
    say "ok: $n";

    CATCH {
        default {
            say "caught: " ~ .message;
        }
    }
}
```

🦋 Вихідний код можна знайти у файлі [survive-a-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/survive-a-loop.raku).

## Вивід

```
ok: 1
caught: bad: 2
ok: 3
```

## Коментарі

1. Фазер `CATCH` обробляє виняток, кинутий усередині тіла циклу, тож `die` на другій ітерації перехоплюється, а не стає фатальним.

1. Щойно виняток оброблено, цикл просто продовжує з наступним значенням, — саме тому `ok: 3` усе одно виводиться.

{% include nav.html %}
