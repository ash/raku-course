---
title: 'Решение: Переиспользуйте токен'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Исходный код можно найти в файле [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Вывод

```
｢cat｣
｢dog｣
```

## Комментарии

1. Одно и то же именованное регулярное выражение `word` вызывается в шаблоне дважды.

1. Когда именованный захват встречается больше одного раза, результаты образуют список, поэтому
их читают как `$<word>[0]` и `$<word>[1]`.

{% include nav.html %}
