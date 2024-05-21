---
title: Викторина — Многоуровневые хэши
---

{% include menu.html %}

Для данной структуры данных:

```raku
my %statistics =
    1900 => {
        Jan => 500,
        Feb => 550,
    },
    2000 => {
        Jan => 1230,
        Feb => 1245,
    };
```

Выберите строки, которые предоставляют правильный доступ к элементу данных за февраль 1900 года.

{:.quiz}
1 | say %statistics<1900>&lt;Feb&gt;;
1 | say %statistics{1900}&lt;Feb&gt;; | Это правильно, так как `1900` может быть неявно преобразовано в строку.
0 | say %statistics{1900}{Feb}; | Неправильно, так как `Feb` должна быть строкой.
1 | say %statistics{&apos;1900&apos;}{&apos;Feb&apos;};

{% include quiz.html %}

{% include nav.html %}