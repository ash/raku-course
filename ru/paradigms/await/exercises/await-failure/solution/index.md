---
title: 'Решение: Дождитесь сбоя'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 Исходный код можно найти в файле [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Вывод

```
caught: boom
```

## Комментарии

1. Блок промиса бросает исключение, поэтому промис оказывается *сломан*. Исключение не теряется —
оно удерживается, пока кто-нибудь не дождётся промиса.

1. `await $p` перебрасывает его прямо там, и фазер `CATCH` обрабатывает его как любое обычное
исключение. Так ошибки фоновой работы всплывают там, где вы ждёте её результата.

{% include nav.html %}
