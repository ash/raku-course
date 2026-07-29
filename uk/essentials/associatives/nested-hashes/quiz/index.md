---
title: Тест — Багаторівневі хеші
---

{% include menu.html %}

Для наведеної структури даних:

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

Оберіть рядки, які правильно звертаються до елемента даних за лютий 1900 року.

{:.quiz}
1 | say %statistics<1900>&lt;Feb&gt;;
1 | say %statistics{1900}&lt;Feb&gt;; | Це правильно, бо `1900` неявно перетворюється на рядок.
0 | say %statistics{1900}{Feb}; | Неправильно, бо `Feb` має бути рядком.
1 | say %statistics{&apos;1900&apos;}{&apos;Feb&apos;};

{% include quiz.html %}

{% include nav.html %}
