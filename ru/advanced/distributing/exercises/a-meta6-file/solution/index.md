---
title: 'Решение: Файл META6'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

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

🦋 Исходный код можно найти в файле [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Комментарии

1. `provides` сопоставляет имя модуля с файлом, в котором он реализован, причём путь каталогов соответствует частям имени, разделённым `::`.

1. `depends` перечисляет другие дистрибутивы, от которых зависит данный — здесь единственная запись `"JSON::Fast"`. Когда кто-то устанавливает `Greet::Simple`, инструменты сначала загрузят `JSON::Fast`. Пустой массив означал бы отсутствие зависимостей.

{% include nav.html %}
