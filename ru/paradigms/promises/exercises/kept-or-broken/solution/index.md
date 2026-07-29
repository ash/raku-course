---
title: 'Решение: Выполнен или нарушен'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Исходный код можно найти в файле [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Вывод

```
Kept
```

## Комментарии

1. После того как блок успешно завершился, промис считается _исполненным_.

1. `.status` сообщает об этом как `Kept`. Если бы блок бросил исключение, статус был бы `Broken`.

{% include nav.html %}
