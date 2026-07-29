---
title: 'Решение: Акроним'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Исходный код можно найти в файле [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Вывод

```
HTML
```

## Комментарии

1. `$phrase.words` возвращает список слов. Цикл берёт первый символ каждого слова с помощью `substr(0, 1)` и добавляет его к `$acronym`.

1. После того как все начальные буквы собраны, `uc` переводит результат в верхний регистр: `HTML`.

{% include nav.html %}
