---
title: 'Решение: Переживите цикл'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [survive-a-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/survive-a-loop.raku).

## Вывод

```
ok: 1
caught: bad: 2
ok: 3
```

## Комментарии

1. Фазер `CATCH` обрабатывает исключение, брошенное внутри тела цикла, поэтому `die` на второй
итерации перехватывается, а не оказывается фатальным.

1. Как только исключение обработано, цикл просто продолжается со следующим значением — вот
почему `ok: 3` всё же печатается.

{% include nav.html %}
