---
title: 'Розв''язання: Файл META6'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Коментарі

1. `provides` зіставляє ім'я модуля з файлом, що його втілює, і шлях каталогів відповідає частинам імені, розділеним `::`.

1. `depends` перелічує інші дистрибутиви, потрібні цьому, — тут єдиний запис `"JSON::Fast"`. Коли хтось встановлюватиме `Greet::Simple`, інструменти спершу підтягнуть `JSON::Fast`. Порожній масив означав би відсутність залежностей.

{% include nav.html %}
