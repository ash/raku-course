---
title: 'Solution: Файл META6'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

`META6.json`:

```json
{
    "name": "Greet::Simple",
    "version": "0.0.1",
    "description": "A simple greeting module",
    "authors": [ "Your Name" ],
    "license": "Artistic-2.0",
    "depends": [ "JSON::Fast" ],
    "provides": {
        "Greet::Simple": "lib/Greet/Simple.rakumod"
    }
}
```

🦋 Можете да намерите изходния код във файла [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Коментари

1. `provides` свързва името на модула с файла, който го имплементира, като пътят на директорията съответства на частите на името, разделени с `::`.

1. `depends` изброява другите дистрибуции, от които тази зависи -- тук единственият запис е `"JSON::Fast"`. Когато някой инсталира `Greet::Simple`, инструментите първо ще изтеглят `JSON::Fast`. Празен масив означава липса на зависимости.

{% include nav.html %}
