---
title: Вложенные хэши
---

{% include menu.html %}

Создание вложенных хэшей похоже на создание [вложенных массивов](/ru/essentials/positionals/nested-arrays). Используйте фигурные скобки для заключения внутренних хэшей.

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid'
    },
    Alla => {
        age => 21,
        city => 'Tokyo'
    };
```

Обратите внимание, что завершающая запятая является допустимым элементом синтаксиса:

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid',
    },
    Alla => {
        age => 21,
        city => 'Tokyo',
    };
```

Наличие запятой помогает при редактировании структуры путем копирования и вставки строк.

Чтобы получить элементы из внутренних хэшей, используйте два ключа один за другим.

```raku
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo
```

{% include nav.html %}