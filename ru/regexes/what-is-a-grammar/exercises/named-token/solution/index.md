---
title: 'Решение: Именованный токен'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Исходный код можно найти в файле [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Вывод

```
｢hello｣
```

## Комментарии

1. `my regex word { \w+ }` даёт шаблону имя, чтобы его можно было использовать повторно.

1. Запись `<word>` в шаблоне сопоставляет его и захватывает результат под тем же именем,
доступным как `$<word>`. Первая вереница словесных символов — это `hello`.

{% include nav.html %}
