---
title: Файл META6
translations_gpt:
---

{% include menu.html %}

Дистрибутив описывается одним файлом в его корневой директории — `META6.json`. Это обычный JSON, который сообщает инструментам имя дистрибутива, версию, что он предоставляет и от чего зависит:

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

Два наиболее важных ключа — `provides`, который сопоставляет имя каждого модуля с файлом, в котором он реализован, и `depends`, который перечисляет другие дистрибутивы, от которых зависит данный.

Файл располагается в корне стандартной структуры каталогов:

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

Код модуля находится в `lib/`, причём путь каталогов соответствует частям имени, разделённым `::` (`Maths::Simple` → `lib/Maths/Simple.rakumod`). Тесты находятся в `t/`. При такой структуре и правильном `META6.json` инструменты могут собрать, протестировать и установить дистрибутив.

{% include nav.html %}
