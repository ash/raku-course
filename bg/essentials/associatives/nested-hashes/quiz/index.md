---
title: Тест — Многостепенни хешове
---

{% include menu.html %}

За дадената структура от данни:

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

Изберете редовете, които предоставят правилен достъп до данните за февруари 1900 година.

{:.quiz}
1 | say %statistics<1900>&lt;Feb&gt;;
1 | say %statistics{1900}&lt;Feb&gt;; | Това е правилно, тъй като `1900` може да бъде неявно преобразувано в низ.
0 | say %statistics{1900}{Feb}; | Неправилно, тъй като `Feb` трябва да бъде низ.
1 | say %statistics{&apos;1900&apos;}{&apos;Feb&apos;};

{% include quiz.html %}

{% include nav.html %}