---
title: Тест — Глобални променливи
---

{% include menu.html %}

## 1

Какво отпечатва тази програма?

```raku
my $value = 100;

{
    $value *= 2;
}

say $value;

{
    $value = 300;
}
```

{:.quiz-select}
200 | Отговор: (: 200 :)

## 2

Какво отпечатва тази програма?

```raku
my $visible = 'Sun';

{
    $visible = 'Moon';

    {
        $visible = 'None';
    }

    say $visible;
}
```

{:.quiz-select}
None | Отговор: (: Sun, Moon, None :) | Същата глобална променлива се използва във всички блокове.

{% include quiz.html %}

{% include nav.html %}