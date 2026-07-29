---
title: Файлът META6
translations_gpt:
---

{% include menu.html %}

Една дистрибуция се описва от единствен файл в нейната главна директория -- `META6.json`. Това е обикновен JSON, който казва на инструментите името на дистрибуцията, версията, какво предоставя и от какво зависи:

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

Двата ключа, които са най-важни, са `provides`, който свързва всяко име на модул с файла, който го имплементира, и `depends`, който изброява другите дистрибуции, от които тази зависи.

Файлът се намира в корена на стандартното оформление на директориите:

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

Кодът на модула се намира под `lib/`, като пътят на директорията съответства на частите на името, разделени с `::` (`Maths::Simple` -> `lib/Maths/Simple.rakumod`). Тестовете се намират под `t/`. С тази структура и коректен `META6.json`, инструментите могат да компилират, тестват и инсталират дистрибуцията.

{% include nav.html %}
