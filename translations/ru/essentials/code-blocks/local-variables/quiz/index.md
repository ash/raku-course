---
title: 'Тест: Локальные переменные'
---

{% include menu.html %}

## 1

Что выведет эта программа?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
    say $value;
}
```

{:.quiz-select}
2 | Ответ: (: 1, 2, 100, 200 :) | Используется локальная переменная.

## 2

Что выведет эта программа?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
}

say $value;
```

{:.quiz-select}
100 | Ответ: (: 1, 2, 100, 200 :) | Локальная переменная изменена, но выводится глобальная переменная.

{% include quiz.html %}

{% include nav.html %}
