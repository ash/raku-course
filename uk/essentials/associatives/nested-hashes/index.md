---
title: Вкладені хеші
---

{% include menu.html %}

Створення вкладених хешів схоже на створення [вкладених масивів](/uk/essentials/positionals/nested-arrays). Використовуйте фігурні дужки для обрамлення внутрішніх хешів.

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

Зверніть увагу, що кома в кінці є допустимим елементом синтаксису:

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

Наявність коми допомагає при редагуванні структури шляхом копіювання та вставки рядків.

Щоб отримати елементи з внутрішніх хешів, використовуйте два ключі один за одним.

```raku
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo
```

{% include nav.html %}