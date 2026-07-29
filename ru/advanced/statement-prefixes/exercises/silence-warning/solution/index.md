---
title: 'Решение: Подавление предупреждения'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Исходный код можно найти в файле [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Вывод

```
Hello, !
```

## Комментарии

1. Интерполяция неопределённой переменной `$name` в строку обычно вызывает предупреждение «use of uninitialized value». Оборачивание выражения в `quietly` подавляет его, и выводится только приветствие.

1. Как и `do`, `quietly` возвращает значение своего блока, поэтому собранная строка (с пустым местом вместо отсутствующего имени) сохраняется в `$greeting`.

1. `quietly` лишь скрывает предупреждение — значение по-прежнему не определено. Если вместо этого вы хотите *обработать* отсутствующее значение, задайте значение по умолчанию с помощью оператора defined-or `//`: `$name // 'friend'` возвращает `'friend'`, когда `$name` не определено, и тогда `"Hello, " ~ ($name // 'friend') ~ "!"` выведет `Hello, friend!` без каких-либо предупреждений.

{% include nav.html %}
