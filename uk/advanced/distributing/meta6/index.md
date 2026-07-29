---
title: Файл META6
translations_gpt:
---

{% include menu.html %}

Дистрибутив описується єдиним файлом у його верхньому каталозі — `META6.json`. Це звичайний JSON, який повідомляє інструментам назву дистрибутива, версію, те, що він надає, і те, від чого залежить:

```json
{
    "name": "Maths::Simple",
    "version": "0.0.1",
    "description": "Simple maths helpers",
    "authors": [ "Your Name" ],
    "license": "Artistic-2.0",
    "depends": [],
    "provides": {
        "Maths::Simple": "lib/Maths/Simple.rakumod"
    }
}
```

Два найважливіші ключі — це `provides`, який зіставляє ім'я кожного модуля з файлом, що його втілює, та `depends`, який перелічує інші дистрибутиви, потрібні цьому.

Файл лежить у корені стандартної структури каталогів:

```
Maths-Simple/
├── META6.json
├── README.md
├── lib/
│   └── Maths/
│       └── Simple.rakumod
└── t/
    └── 01-basic.rakutest
```

Код модуля живе під `lib/`, і шлях каталогів відповідає частинам імені, розділеним `::` (`Maths::Simple` → `lib/Maths/Simple.rakumod`). Тести живуть під `t/`. За такої структури й правильного `META6.json` інструменти можуть збирати, тестувати й встановлювати дистрибутив.

{% include nav.html %}
