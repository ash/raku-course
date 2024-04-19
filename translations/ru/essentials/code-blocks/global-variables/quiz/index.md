---
title: 'Тест: Глобальные переменные'
---

{% include menu.html %}

## 1

Что выведет эта программа?

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
200 | Ответ: (: 200 :)

## 2

Что выведет эта программа?

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
None | Ответ: (: Sun, Moon, None :) | Программа ссылается на одну и ту же глобальную переменную.

{% include quiz.html %}

{% include nav.html %}
