---
title: Розв'язання вправи «Дочекайтеся невдачі»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Вивід

```
caught: boom
```

## Коментарі

1. Блок обіцянки кидає виняток, тож обіцянку *зламано*. Виняток не втрачається — він тримається доти, доки хтось не дочекається обіцянки.

1. `await $p` повторно кидає його просто там, де фазер `CATCH` обробляє його як будь-який звичайний виняток. Саме так помилки у фоновій роботі виринають там, де ви чекаєте на результат.

{% include nav.html %}
