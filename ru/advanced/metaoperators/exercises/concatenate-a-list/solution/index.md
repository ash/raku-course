---
title: 'Решение: Соберите URL'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Исходный код можно найти в файле [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Вывод

```
http://example.com
18
```

## Комментарии

1. Массив записан с помощью кавычек из угловых скобок `<...>`, что равносильно записи
`'http', '://', 'example', '.com'`.

1. Метаоператор свёртки `[~]` ставит оператор конкатенации строк `~` между всеми элементами,
поэтому `[~] @parts` склеивает четыре части в одну строку `http://example.com`.

1. Сохранение результата в `$url` позволяет использовать его повторно: `$url.chars` затем
сообщает, что собранный URL имеет длину `18` символов.

{% include nav.html %}
