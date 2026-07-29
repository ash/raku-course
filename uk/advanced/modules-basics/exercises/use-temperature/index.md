---
title: Вправа «Скористайтеся перетворювачем»
translations_gpt:
---

{% include menu.html %}

## Завдання

Вам дано модуль у файлі `Temperature.rakumod`:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Напишіть окрему програму, яка за допомогою цього модуля переводить температуру за Цельсієм — передану аргументом командного рядка — у градуси Фаренгейта й виводить результат.

## Приклад

```console
$ raku -I. temperature.raku 100
212
```

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}
