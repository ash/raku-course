---
title: 'Розв''язання: Вкладене ім''я'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 Вихідний код можна знайти у файлі [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Вивід

```
10
20
```

## Коментарі

1. Вкладення одного простору імен в інший будує довший шлях із `::`. І змінна, і підпрограма живуть на два рівні вглиб, у `Outer::Inner`.

1. Повне ім'я `$Outer::Inner::base` дістає змінну, а `Outer::Inner::doubled()` дістає підпрограму через ті самі два рівні. Ім'я підпрограми не несе сигіла, тож, на відміну від змінної, перед ним немає `$`.

1. Обидва члени оголошено через `our`, — саме це й робить їх видимими за межами їхнього модуля. Оголошення через `my` лишило б їх приватними для `Inner`.

{% include nav.html %}
